const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    var modRoles = message.member.roles.cache.has('724565278016536648', '796158091880038460', '739236783694413836');

    var embed = new discord.MessageEmbed()
        .setDescription("Deze command is alleen voor **Management+** mogelijk.");

    if (!modRoles) return message.reply(embed);

    var embed = new discord.MessageEmbed()
    .setTitle("Management Commands")
    .setDescription("Prefix: `!`")
    .setColor("#2075d6")
    .addField('Commands:', [
        `**-> lock:** Hiermee kan u een kanaal vergrendelen let op! **Alleen voor speler kanalen niet bij staff channels.** `,
        `**-> unlock:** Hiermee kan u een kanaal ontgrendelen. **Alleen voor speler kanalen niet bij staff channels.**`,
        `**-> say:** Hiermee kan u een bericht sturen naar een kanaal dat u wilt. `,
    ])

    return message.channel.send(embed);

}

module.exports.help = {
    name: "help_management"
}