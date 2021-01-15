const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var categoryID = "728563729599430656";

    var embed = new discord.MessageEmbed()
        .setDescription("Deze command is alleen voor **Support Team** mogelijk.");

    var modRoles = message.member.roles.cache.has('780823775754453023');

    if (!modRoles) return message.reply(embed);

    if (message.channel.parentID != categoryID) return message.reply("Je bent niet in een ticket.");

    var addUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!addUser) return message.reply("Geen gebruiker meegegeven.");

    var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setFooter("Antwoord binnen 30 seconden!")
        .setDescription(`Wil je ${addUser} verwijderen?`);

    var embedK = new discord.MessageEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ size: 4096 })}`)
    .setDescription(`Gebruiker verwijderd! Gebruiker: ${addUser}`);

    message.channel.send(embedPrompt).then(async msg => {

        message.delete();

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"])

        if (emoji == "✅") {

            msg.delete();

            message.channel.updateOverwrite(addUser, {
                SEND_MESSAGES: false,
                CREATE_INSTANT_INVITE: false,
                READ_MESSAGES: false,
                ATTACH_FILES: false,
                ADD_REACTIONS: false,
                CONNECT: false,
                READ_MESSAGES_HISTORY: false,
                VIEW_CHANNEL: false
            });

            message.channel.send(embedK).then(msg => msg.delete({timeout: 10000}));

        }else if(emoji == "❌"){

            msg.delete();

            message.reply("Verwijdering geannuleerd.").then(msg => msg.delete({timeout: 5000}));
        }

    });

}

async function promptMessage(message, author, time, reactions) {

    time *= 1000;

    for (const reaction of reactions) {
        await message.react(reaction);
    }

    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time}).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
    name: "remove"
}