const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    message.delete();

    var member = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]));
    if (!member) member = message.member;

    var roles = member.roles.cache.size - 1;
    var roleNames = member.roles.cache.map(r => r).join(" ").replace("@everyone", "");
    if (roles == 0) roleNames = "Geen rollen";

    var status = member.presence.status;

    var nickName = member.nickname;
    if (nickName == null || undefined) nickName = "Geen";

    var embed = new discord.MessageEmbed()
        .setColor("#2075d6")
        .setAuthor(`${message.author.username}`, `${member.user.displayAvatarURL({ size: 4096 })}`)
        .addField("ID:", `${member.id}`, true)
        .addField("Bijnaam:", nickName, true)
        .addField("Status:", `${status}`, true)
        .addField("Game:", `${member.presence.activities[0] ? member.presence.activities[0].name : 'Geen'}`, true)
        .addField("Account gemaakt op:", `${moment(member.user.createdAt).format("LL")}`)
        .addField("Server gejoined:", `${moment(member.joinedAt).format("LL")}`)
        .addField(`Rollen [${roles}]`, `${roleNames}`);

    return message.channel.send(embed);




}

module.exports.help = {
    name: "whois"
}