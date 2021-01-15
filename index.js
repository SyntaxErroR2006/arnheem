const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
const { join } = require("path");
const { connect } = require("http2");

const usersMap = new Map()

/* 
'id' => {
    msgCount: 0,
    LastMessage: 'message',
    timer: fn()
}
*/




const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});

client.login(process.env.token);


client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    let activities = ["!help", "Arnhem Bot", "Prefix !", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} members`]
    i = 0;
    setInterval(() => {
        client.user.setPresence({
            activity: {
                name: activities[i++ % activities.length],
                type: "LISTENING",
                type: "PLAYING",
                type: "WATCHING"
            }
        })
    }, 5000);



});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var args = message.content.split(" ");

    var command = args[0];

    //Command handler

    if (!message.content.startsWith(prefix)) return;

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, args);


    if (content.includes(".com")) {
        message.channel.messages.fetch().then(messages => {
            message.channel.bulkDelete(messages)
        })
        message.channel.send(message.author.toString() + "geen linkjes sturen aub! Je bericht is verwijderd.")
    }


    if (content.includes("www.")) {
        message.channel.messages.fetch().then(messages => {
            message.channel.bulkDelete(messages)
        })
        message.channel.send(message.author.toString() + "geen linkjes sturen aub! Je bericht is verwijderd.")
    }

    if (content.includes("discord.gg/")) {
        message.channel.messages.fetch().then(messages => {
            message.channel.bulkDelete(messages)
        })
        message.channel.send(message.author.toString() + "geen linkjes sturen aub! Je bericht is verwijderd.")
    }


    var role = message.member.roles.cache.has('724553018552615002');


});

// -WELKOM COMMAND-
client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('724553018552615002');

    if (!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('724577910777839737');

    if (!channel) return;

    // channel.send(`Welkom bij de server ${member}! Voor hulp typ: .help.`);

    var joinEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hallo! ${member.user.username}, Welkom bij de server!`)
        .setColor("#30db00")
    channel.send(joinEmbed);
});



client.on("guildMemberRemove", member => {
    ;

    var channel = member.guild.channels.cache.get('724577910777839737');

    if (!channel) return;

    var leaveEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Jammer dat ${member.user.username}, weg is!`)
        .setColor("#fc0d00")
    channel.send(leaveEmbed);
})
