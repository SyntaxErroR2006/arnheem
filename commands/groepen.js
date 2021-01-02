const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setTitle("Groepen Arnhem Roleplay")
        .addField("Gemeente", "https://www.roblox.com/groups/6687956/Gemeente-Arnhem#!/about")
        .addField("Ambulance", "https://www.roblox.com/groups/6726111/AH-Ambulance#!/about")
        .addField("Politie", "https://www.roblox.com/groups/6726030/AH-Politie#!/about")
        .addField("Koninklijke Marechausssee", "https://www.roblox.com/groups/6726097/AH-Koninklijke-Marechaussee#!/about")
        .addField("Brandweer", "https://www.roblox.com/groups/6726053/AH-Brandweer#!/about")
        .addField("Rijkswaterstaat", "https://www.roblox.com/groups/7463182/AH-Rijkswaterstaat#!/about")
        .addField("Beveiliging", "https://www.roblox.com/groups/6745745/AH-Beveiliging#!/about")
        .setColor("#2075d6");
    return message.channel.send(embed);

}

module.exports.help = {
    name: "groepen"
}