const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'wc?help') {
    msg.reply('***le help n"est pas encore disponible***')
  }
});
client.login('NDA0MDMzNDQyMzM0OTAwMjI0.DgQCyw._IMh_h2J3v80pTmHBQrkwqXcE6Q');
