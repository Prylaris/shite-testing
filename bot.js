var instance = require("./package.json");

var Discord = require("discord.js");
var inv = new Discord.Client({
    disableEveryone: true,
    sync: true, //This is not needed.
    fetchAllMembers: true //This is bad.
})

//var utils = require('./u.js')
var token = "   "//u need to put ur bot token here
var botPrefix = "!" //Prefix is a string.

inv.on("ready", () => {
    //inv.user.setUsername("onenub")
        console.log(`reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`)
    //inv.channels.get("523533678379270174").setName(`Shard: ${inv.shard.id}`)

    inv.channels.get("523547379077611530").setName(`Express: ${instance.dependencies.express.slice(1)}`)
    inv.channels.get("523548929845886984").setName(`Enmap: ${instance.dependencies.enmap.slice(1)}`)
    inv.channels.get("523549329588224000").setName(`Lavalink: ${instance.dependencies.lavalink.slice(1)}`)
    inv.channels.get("523550720880803861").setName(`PM2: ${instance.dependencies.pm2.slice(1)}`)
})

/*inv.on("message", async (message) => {
    if (message.content. === "announce") {
        var msg = args.join(" ")
        if(!msg) return message.channel.send("Please specify shit to announce..");

        inv.channels.get("523298131342000158").send(`**New Announcement:**\n\n ${msg}`)
        return message.reply(`Successfully announced: **\`${msg}\`**`)
    }
})*/
inv.login(token)