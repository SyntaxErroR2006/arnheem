const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setTitle("Partnerschap aanvragen")
        .setColor("#2075d6")
        .setDescription(`**Geachte speler,** \n\n*Wat leuk dat u partner wilt worden, echter zitten hier een paar voorwaarden aan verbonden. Laat even weten of u voldoet aan deze eisen, \nindien dit van toepassing is komt iemand van @Marketing & Communicatie Mederwerker u zo spoedig mogelijk helpen.*`)
        .addField("Voorwaarden", "- Er mogen geen pings in het bericht zitten (Indien wel handmatig verwijderen) \n - Minimaal 200 leden \n - Partner aanvrager mag geen warns hebben.")

    return message.channel.send(embed)



}

module.exports.help = {
    name: "partner"
}