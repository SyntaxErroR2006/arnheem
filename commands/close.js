const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    const categoryID = "728563729599430656";

    var modRoles = message.member.roles.cache.has('724566724220944484');

    var embed = new discord.MessageEmbed()
        .setDescription("Deze command is alleen voor **Support Team** mogelijk.");

    if (!modRoles) return message.reply(embed);


    if (message.channel.parentID == categoryID) {
        message.channel.delete();
    } else {

        message.channel.send("Gelieve dit commando te doen bij een ticket!");

    }
}

module.exports.help = {
    name: "close"
}