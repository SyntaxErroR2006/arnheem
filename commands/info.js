const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

        var botEmbed = new discord.MessageEmbed()
			.setTitle("Arnhem Informatie")
			.addField("Versie", "`V1.0.0`")
            .addField("Eigenaar", "`SyntaxErroR#0001`")
			.addField("Gebruikers", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`)
			.addField("Donatie", "[Robux Only](https://www.roblox.com/game-pass/13929030/Donatie-Arnhem)") 
			.setColor("#2075d6")
			.setFooter(`Aangevraagd door: ${message.author.username}`)
			.setThumbnail(`${message.guild.iconURL()}`)

        return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}