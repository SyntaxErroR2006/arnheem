const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

    message.delete();

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Je hebt geen permissie voor deze command!");

    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true,
        VIEW_CHANNEL: true
        
    })

    var botEmbed = new discord.MessageEmbed()
        .setDescription(`🔓| Kanaal geunlocked door: ${message.author}`)
        .setColor("RANDOM")
        return message.channel.send(botEmbed);

    }

module.exports.help = {
    name: "unlock"
}