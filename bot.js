const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
