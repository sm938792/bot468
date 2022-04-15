const Discord = require("discord.js")

require("dotenv").config()

const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelId = "964607592569663489"

Client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
})

Client.login(process.env.TOKEN)