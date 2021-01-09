const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle("Algemene Commands")
    .setDescription("Prefix: `!`")
    .setColor("#2075d6")
    .addField('Commands:', [
        `**-> suggestie:** Hiermee kan u een suggestie versturen. `,
        `**-> bug:** Hiermee kan u een bug versturen. `,
        `**-> leden:** Hiermee kan u het leden aantal zien. `,
        `**-> groepen:** Hiermee kan u de groepen van Arnhem zien. `,
        `**-> whois:** Hiermee kan u info zien van een bepaald gebruiker. `,
        `**-> serverinfo:** Hiermee kan u info zien van deze server. `,
        `**-> botinfo:** Hiermee kan u info zien over de bot. `,
        `**-> ping:** Hiermee kan u de ping zien van de bot. `,
        `**-> info:** Hiermee kan u info zien. `,
    ])

    return message.channel.send(embed);

}

module.exports.help = {
    name: "help_algemeen"
}