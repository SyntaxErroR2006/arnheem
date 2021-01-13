const discord = require("discord.js"); 

module.exports.run = async(client, message, args) => {

    var cmds = (message.member.guild.channels.cache.get("724578026242703390", "724582536432582758"));

    if(!cmds) return message.reply("U zit niet in het juiste kanaal.")

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