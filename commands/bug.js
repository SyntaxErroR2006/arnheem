const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //message.delete();


    if (args[1] == null) {

        var embed = new discord.MessageEmbed()
            .setDescription("Geen argumenten gevonden. \n !bug <bug>")
            .setColor("#0d8579")
        return message.channel.send(embed)

    }

    var text = args || `Niks meegeven.`;

    let bug = args.join(" ").slice(4);

    var bugKanaal = message.member.guild.channels.cache.get("724582341795774514");

    if (!bugKanaal) return message.channel.send("Kan het bug kanaal niet vinden.")


    var embed = new discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ size: 4096 })}`)
        .setColor("#2075d6")
        .addField('Bug:', bug)



    message.channel.send("Verzonden!");
    var bugKanaal = message.guild.channels.cache.find(ch => ch.name === "bugs");
    if (!bugKanaal) return message.guild.send("Kan het kanaal niet vinden");

    
}

module.exports.help = {
    name: "bug"
}