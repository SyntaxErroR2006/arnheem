const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();


    var embed = new discord.MessageEmbed()
    .setTitle("Ticket Commands")
    .setDescription("Prefix: `!`")
    .setColor("#2075d6")
    .addField('Commands:', [
        `**-> new:** Hiermee kan u een ticket openen. `,
        `**-> close:** Hiermee kan u een ticket sluiten. `,
        `**-> add:** Hiermee kan u een persoon adden in een ticket.`,
        `**-> remove:** Hiermee kan u een persoon removen uit een ticket. `,
        `**-> partner:** Hiermee kan u de partner voorwaarden zien. `,
        `**-> claim:** Hiermee kan u ticket claimen. `,

    ])

    return message.channel.send(embed);

}

module.exports.help = {
    name: "help_tickets"
}