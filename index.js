const Discord = require("discord.js")

require("dotenv").config()

const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

Client.on("ready", () => {
    console.log(`Logged in as ${Client.user.tag}`)
})

Client.on("messageCreate", (message) => {
    if(message.content == "Hi") {
        message.reply("Hello World!")
    }
})

Client.login(process.env.TOKEN)