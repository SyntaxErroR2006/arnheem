const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var modRoles = message.member.roles.cache.has('724566724220944484');

    var embed = new discord.MessageEmbed()
        .setDescription("Deze command is alleen voor **Support Team** mogelijk.");

    if (!modRoles) return message.reply(embed);

    var embed = new discord.MessageEmbed()
    .setTitle("Moderatie Commands")
    .setDescription("Prefix: `!`")
    .setColor("#2075d6")
    .addField('Commands:', [
        `**-> Server Name:** ${message.guild.name}`,
        `**-> training:** Hiermee kan u een suggestie versturen. `,
        `**-> warn:** Hiermee kan u een bug versturen. `,
    ])

    return message.channel.send(embed);

}

module.exports.help = {
    name: "help_moderatie"
}