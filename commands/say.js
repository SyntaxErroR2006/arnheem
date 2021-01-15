const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();

    //!zeg title | bericht | kleur | kanaal

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Sorry jij kan dit niet gebruiken.");

    var seperator = "|";

    if (args[1] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#00ee00")
            .setDescription(`Maak een bericht aan door gebruik te maken van: \n *say bericht ${seperator} kleur ${seperator} kanaal`);

        return message.reply(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if(argsList[2] === undefined) argsList[2] = "#eeeeee";
    if(argsList[3] === undefined) argsList[3] = "「📣」meldingen";

    var options = {

        bericht: argsList[1] || "Geen inhoud meegegeven",
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()

    }

    var zegEmbed = new discord.MessageEmbed()
    .setColor(options.kleur)
    .setDescription(`${options.bericht} \n\n Mvg, \n  ${message.author}`)
    .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if (!channel) return message.reply("Dit kanaal bestaat niet")

    channel.send(zegEmbed);

}

module.exports.help = {
    name: "say"
}