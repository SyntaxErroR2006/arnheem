const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args, lock) => {

    message.delete();
    
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: U kunt dit niet doen.");

    message.delete()
    message.channel.createOverwrite(message.guild.id, {
        CREATE_INSTANT_INVITE: false,
        READ_MESSAGES: true,
        SEND_MESSAGES: false,
        ATTACH_FILES: false,
        CONNECT: false,
        ADD_REACTIONS: false,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true
    })

    var botEmbed = new discord.MessageEmbed()
        .setDescription(`🔏| Kanaal gelocked door: ${message.author}`)
        .setColor("RANDOM")
    return message.channel.send(botEmbed);



}

module.exports.help = {
    name: "lock"
}