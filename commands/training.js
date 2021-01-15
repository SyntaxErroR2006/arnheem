const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    //!training <DIENSTNUMMER> <TYPE> <CO-HOST> <DATUM> <TIJD> <OPMERKINGEN>

    var modRoles = message.member.roles.cache.has('724566724220944484');

    var embed = new discord.MessageEmbed()
        .setDescription("Deze command is alleen voor **Support Team** mogelijk.");

    if (!modRoles) return message.reply(embed);

    var seperator = "|";

    if (args[1] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Training Menu")
            .setColor("#2075d6")//#0d8579 //#55c260 //#2075d6
            .setDescription(`Je maakt een training aan door het volgende te doen: \n\n !training <DIENSTNUMMER> ${seperator} <TYPE> ${seperator} <2DE-DOCENT> ${seperator} <DATUM> ${seperator} <TIJD> ${seperator} <OPMERKINGEN> \n\n Dienstnummers:`)
            .addField("1.", "Politie (POL)")
            .addField("2.", "Ambulance (AMB)")
            .addField("3.", "Brandweer (BRW)")
            .addField("4.", "Koninklijke Marechaussee (KMar)")
            .addField("5.", "Dienst Speciale Interventies (DSI)")
            .addField("6.", "Handhaving (HA)")


        return message.channel.send(embed)

    }

    // 1: Politie
    // 2: Ambulance
    // 3: Brandweer
    // 4: Rijkswaterstaat
    // 5: Koninklijke Marechaussee
    // 6: Dienst Speciale Interventies
    // 7: Beveiliging
    // 8: Rijexamen



    var argsList = args.join(" ").split(seperator);

    if (argsList[6] === undefined) argsList[6] = "trainingen";

    var options = {

        Dienst: argsList[0].trim(),
        TypeTraining: argsList[1],
        Hulp: argsList[2],
        Datum: argsList[3],
        Tijd: argsList[4],
        Opmerkingen: argsList[5],
        kanaal: "trainingen"

    }


    if (args[1] == "1") {


        var politieEmbed = new discord.MessageEmbed()
            .setTitle("Politie training")
            .setColor("#283dfc")
            .setFooter("Bericht word na 24uur verwijderd.")
            .addFields(
                { name: "Dienst", value: "Politie" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Docent", value: `${message.author}` },
                { name: "2de Docent", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-1.discordapp.net/external/KKlJvqlZCrOZwbqEMtUGoP7CFcXh5X09Q7QETs4WziE/%3Fq%3Dtbn%253AANd9GcR8Mjlge86tu_5b9wk9EeAS97S5ij9NOGivxTgXC5k3uqsO2ICA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === "trainingen");
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(politieEmbed).then(message => message.delete({timeout: 86400000}));

    } else if (args[1] == "2") {

        var ambulanceEmbed = new discord.MessageEmbed()
            .setTitle("Ambulance training")
            .setColor("#fcf228")
            .setFooter("Bericht wordt na 24uur verwijderd.")
            .addFields(
                { name: "Dienst", value: "Ambulance" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Docent", value: `${message.author}` },
                { name: "2de Docent", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-2.discordapp.net/external/V-rqFb9iD1SZ5I_88D0sbxXHqgs9EotbAjjiJAd176A/https/upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Star_of_life2.svg/260px-Star_of_life2.svg.png")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === "trainingen");
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(ambulanceEmbed).then(message => message.delete({timeout: 86400000}));

    } else if (args[1] == "3") {

        var brandweerEmbed = new discord.MessageEmbed()
            .setTitle("Brandweer training")
            .setColor("#eb4034")
            .setFooter("Bericht wordt na 24uur verwijderd.")
            .addFields(
                { name: "Dienst", value: "Brandweer" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Docent", value: `${message.author}` },
                { name: "2de Docent", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-2.discordapp.net/external/-P4wDrIicXyyiXboPZGDyrJ9NWDOZeO6D_UxdWG-fJs/https/t2.rbxcdn.com/05531021dfc8b1eeb9fdb1e884d47398")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === "trainingen");
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(brandweerEmbed).then(message => message.delete({timeout: 86400000}));

    } else if (args[1] == "15") {


        var rijkswaterstaatEmbed = new discord.MessageEmbed()
            .setTitle("Rijkswaterstaat training")
            .setColor("#f5c338")
            .setFooter("Bericht wordt na 24uur verwijderd.")
            .addFields(
                { name: "Dienst", value: "Rijkswaterstaat" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Docent", value: `${message.author}` },
                { name: "2de Docent", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-2.discordapp.net/external/pXKSb5l1EvzFOGzUiy-0Ezeei-ay3S6XR6no0nBYWMI/https/www.informatiehuismarien.nl/publish/pages/113902/rijkswaterstaat.png")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === "trainingen");
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(rijkswaterstaatEmbed).then(message => message.delete({timeout: 86400000}));


    } else if (args[1] == "4") {


        var koneEmbed = new discord.MessageEmbed()
            .setTitle("Koninklijke Marechaussee training")
            .setColor("#2a4724")
            .setFooter("Bericht wordt na 24uur verwijderd.")
            .addFields(
                { name: "Dienst", value: "Koninklijke Marechaussee" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Docent", value: `${message.author}` },
                { name: "2de Docentt", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-2.discordapp.net/external/6iiWFEz90KZX8gme6GSlYAiV8Q9zoQMzCwcSHkNe8b0/https/upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Embleem_Koninklijke_Marechaussee.svg/1200px-Embleem_Koninklijke_Marechaussee.svg.png?width=331&height=475")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === "trainingen");
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(koneEmbed).then(message => message.delete({timeout: 86400000}));


    } else if (args[1] == "5") {

        var dsiEmbed = new discord.MessageEmbed()
            .setTitle("Dienst Speciale Interventies training")
            .setColor("#0514b3")
            .setFooter("Bericht wordt na 24uur verwijderd.")
            .addFields(
                { name: "Dienst", value: "Dienst Speciale Interventies" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Docent", value: `${message.author}` },
                { name: "2de Docent", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-2.discordapp.net/external/X8ISvAaoBw3na0WdMV6G4GzIVGKZu4WoKXHNjd9Ladk/https/upload.wikimedia.org/wikipedia/commons/thumb/0/00/Insigne_du_Dienst_Speciale_Interventies_%2528DSI%2529.svg/1200px-Insigne_du_Dienst_Speciale_Interventies_%2528DSI%2529.svg.png?width=475&height=475")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === "trainingen");
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(dsiEmbed).then(message => message.delete({timeout: 86400000}));




    } else if (args[1] == "6") {

        var DienstSpecialeInterventiesEmbed = new discord.MessageEmbed()
            .setTitle("Handhaving training")
            .setColor("#058db3")
            .setFooter("Bericht wordt na 24uur verwijderd.")
            .addFields(
                { name: "Dienst", value: "Handhaving" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Docent", value: `${message.author}` },
                { name: "2de Docent", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://cdn.discordapp.com/attachments/792729420091359243/793504837886672896/download_2.png")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === "trainingen");
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(DienstSpecialeInterventiesEmbed).then(message => message.delete({timeout: 86400000}));



    } else if (args[1] == "8") {


        var VerkeerspolitieEmbed = new discord.MessageEmbed()
            .setTitle("Rijexamen")
            .setColor("#271c54")
            .setFooter("Bericht wordt na 24uur verwijderd.")
            .addFields(
                { name: "Dienst", value: "Rijexamen" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Host", value: `${message.author}` },
                { name: "Co-host", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://cdn.discordapp.com/attachments/747728968769339393/772448293501665310/rijexamen.jpg")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === "trainingen");
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(VerkeerspolitieEmbed).then(message => message.delete({timeout: 86400000}));


    }


}


module.exports.help = {
    name: "training"
}