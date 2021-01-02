const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setTitle("Bot Info")
        .setDescription("De prefix is: `-`")
        .setThumbnail(`${message.guild.iconURL({ size: 1024 })}`)
        .addField("Bot naam", client.user.username)
        .addField("Bot gejoined:", `${moment(client.user.joinedAt).format("LL")}`)
        .addField("Gemaakt op:", `${moment(client.user.createdAt).format("LL")}`)
    return message.channel.send(embed)

}

module.exports.help = {
    name: "botinfo"
}