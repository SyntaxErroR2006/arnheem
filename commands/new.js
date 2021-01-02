const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "728563729599430656"

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;


    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + "ticket") {
            ticketBestaat = true;

            message.reply("Je hebt al een ticket aangemaakt!");

            return;

        }

    });

    if (ticketBestaat) return;




    message.guild.channels.create(userName.toLowerCase() + "-" + "ticket", { type: "text" }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {


                    var embed = new discord.MessageEmbed()
                        .setTitle("Gemaakt")
                        .setDescription(`Je ticket is succesvol aangemaakt -> <#${settedParent.id}>`)
                        .setColor("#2075d6");
                    message.channel.send(embed).then(message.react("👍"))

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Support Team'), {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Management'), {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    
                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Support Ticket`)
                        .setDescription(`Welkom ${message.author.username}, \n\n U word zo spoedig mogelijk geholpen.\n Met vriendelijke groet, \n Arnhem Staff Team.`)
                        .setColor("#2075d6")
                    settedParent.send(embedParent);




                }
            ).catch(err => {
                message.channel.send("Er is iets foutsgelopen");
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets foutsgelopen");
    });


}

module.exports.help = {
    name: "new"
}