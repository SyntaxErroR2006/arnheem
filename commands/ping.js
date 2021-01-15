module.exports.run = async (client, message, args) => {

    message.delete();

    return message.channel.send("Pong: " + (message.createdTimestamp - Date.now()) + " ms");

}

module.exports.help = {
    name: "ping"
}
