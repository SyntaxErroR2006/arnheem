const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //message.delete();

    if (args[1] == null) {

        var embed = new discord.MessageEmbed()
            .setDescription("Geen argumenten gevonden. \n !suggestie <suggestie>")
            .setColor("#2075d6")
        return message.channel.send(embed)

    }
    var text = args || `Niks meegegeven.`;

    let suggestie = args.join(" ").slice(10);

    var suggestieKanaal = message.member.guild.channels.cache.get("776203307592318976");

    if (!suggestieKanaal) return message.channel.send("Kan het suggestie kanaal niet vinden.")


    var embed = new discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ size: 4096 })}`)
        .addField('Suggestie', suggestie)
        .setColor("#2075d6")

    message.channel.send("Verzonden!");
    var suggestieKanaal = message.guild.channels.cache.find(ch => ch.name === "suggesties");
    if (!suggestieKanaal) return message.guild.send("Kan het kanaal niet vinden");

    suggestieKanaal.send(embed).then(embedMessage => {
        embedMessage.react('✅');
        embedMessage.react('❌');
    });

    

}

module.exports.help = {
    name: "suggestie"
}