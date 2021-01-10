const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
const { join } = require("path");

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
    let activities = ["!help", "Arnhem Bot", "Prefix !", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`]
    i = 0;
    setInterval(() => {
        client.user.setPresence({
            activity: {
                name: activities[i++ % activities.length],
                type: "LISTENING",
                type: "PLAYING",
                type: "WATCHING",
                type: "PLAYING"
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

    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        let msgCount = userData.msgCount;
        ++msgCount;
        if (parseInt(msgCount) === 5 ) {
            const role = message.guild.roles.cache.get('')
            message.member.roles.add(role);
            message.channel.send('Je bent gemuted. Omdat je te veel berichten hebt verstuurd!')
        } else {
            userData.msgCount = msgCount;
            usersMaps.set(message.author.id, userData);
        }
    }
    else {
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage: message,
            timer: null
        });
        setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.');
        }, 5000);
    }


    if(message.member.roles.cache.has('724553018552615002')){
        if(message.content.includes(".com")){
            message.channel.messages.fetch({limit: 1}).then(messages =>{
                message.channel.bulkDelete(messages)
            })
            message.channel.send(message.author.toString() + " geen puntjes!")
        }
    }
    
    if(message.member.roles.cache.has('724553018552615002')){
        if(message.content.includes("www.")){
            message.channel.messages.fetch({limit: 1}).then(messages =>{
                message.channel.bulkDelete(messages)
            })
            message.channel.send(message.author.toString() + "geen linkjes sturen aub! Je bericht is verwijderd.")
        }
    }
    
    if(message.member.roles.cache.has('724553018552615002')){
        if(message.content.includes("https://")){
            message.channel.messages.fetch({limit: 1}).then(messages =>{
                message.channel.bulkDelete(messages)
            })
            message.channel.send(message.author.toString() + "geen linkjes sturen aub! Je bericht is verwijderd.")
        }
    }

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
        .setDescription(`Hallo! ${member.user.username}, Welkom bij de server! Info over de bot? typ: !info`)
        .setColor("#30db00")
        .setFooter("Gebruiker gejoined op:")
        .setTimestamp();
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
        .setFooter("Gebruiker geleaved op:")
        .setTimestamp();
    channel.send(leaveEmbed);
})
