const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

	message.delete();

        var botEmbed = new discord.MessageEmbed()
			.setTitle("Arnhem Informatie")
			.addField("Versie", "`V1.0.1`")
            .addField("Eigenaar", `${message.guild.name}`)
			.addField("Gebruikers", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`)
			.setColor("#2075d6")
			.setFooter(`Aangevraagd door: ${message.author.username}`)
			.setThumbnail(`${message.guild.iconURL()}`)

        return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}