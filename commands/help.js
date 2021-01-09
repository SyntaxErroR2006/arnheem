const discord = require("discord.js"); 

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setDescription("<:gn_nee:797184283600486461> U bent niet in het juiste kanaal!")

    var bugKanaal = message.guild.channels.cache.find(ch => ch.name === "commands");

    if(!bugKanaal) return message.channel.send(embed)

    // if(message.author.id != ["263034920635465729"]) return message.channel.send("U bent niet bevoegd deze command uit te voeren!")

    var embed = new discord.MessageEmbed()
    .setTitle("Help Systeem Arnhem")
    .setDescription("Typ: **!help_<categorie>** om een de commands te zien.")
    .addField("Algemeen", "Dit zijn de algemene commands die mensen kunnen uitvoeren")
    .addField("Moderatie", "Dit zijn de commands voor Moderator+")
    .addField("Tickets", "Dit zijn de ticket commands")
    .addField("Management", "Dit zijn de commands voor Management+")
    .setThumbnail(message.guild.iconURL({ size: 1024 }))
    .setFooter(`Aangevraagd door: ${message.author.username}`)
    .setColor("#2075d6")
    return message.channel.send(embed);
}

module.exports.help = {
    name: "help"
}