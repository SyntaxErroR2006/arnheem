const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args, lock) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: U kunt dit niet doen.");

    message.delete()
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
    })

    var botEmbed = new discord.MessageEmbed()
        .setDescription(`🔏| Kanaal gelocked door: ${message.author}`)
        .setColor("RANDOM")
    return message.channel.send(botEmbed);



}

module.exports.help = {
    name: "lock"
}