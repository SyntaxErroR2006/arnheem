const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

var reden = args.slice(3).join(" ");

var channel = message.member.guild.channels.cache.get("774614168023203840");

var messageArray = message.content.split(" ");

var botEmbed = new discord.MessageEmbed()
        .setTitle("Waarschuwing")
        .setDescription(`**ROBLOX Naam:** ${messageArray[1]}\n**Moderator:** ${message.author.username}\n**Warn:** ${messageArray[2]}\n**Reden:** ${reden}`)
        .setFooter("Gegeven op:")
        .setTimestamp()
        .setThumbnail("https://i.pinimg.com/originals/20/bd/bc/20bdbcc3a551182889757cc938af4028.png")

        if (args[1] == null) {

            var embed = new discord.MessageEmbed()
                .setColor("#3789c4")
                .setDescription(`<:PapendrechtKruis:767683193989759006> Geef een ROBLOX Naam op, **${message.author.username}**`);
        
            return message.reply(embed);
        
        }

        if (args[2] == null) {

            var embed = new discord.MessageEmbed()
                .setColor("#3789c4")
                .setDescription(`<:PapendrechtKruis:767683193989759006> Geef een reden op, **${message.author.username}**`);
        
            return message.reply(embed);
        
        }

        var embed = new discord.MessageEmbed()
        .setColor("#3789c4")
        .setDescription(`<:PapendrechtVinkje:767683193292980225> Succesvol gestuurd, **${message.author.username}**`);

    message.reply(embed);

        return channel.send(botEmbed);
}

module.exports.help = {
    name: "."
}