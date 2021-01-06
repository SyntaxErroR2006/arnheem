const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var modRoles = message.member.roles.cache.has('724566724220944484');

    var embed = new discord.MessageEmbed()
        .setDescription("Deze command is alleen voor **Support Team** mogelijk.");

    if (!modRoles) return message.reply(embed);

    var embed = new discord.MessageEmbed()
        .setDescription(`U wordt geholpen door: ${message.author.tag}`)
    message.channel.send(embed);
}

module.exports.help = {
    name: "claim"
}