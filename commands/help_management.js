const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply(":x: U kunt dit niet doen!");


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