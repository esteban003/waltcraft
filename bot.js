const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'wc?help') {
    msg.reply('***Voici le help  wc?help : Voir les commande wc?close : Message pour serveur Indisponible wc?welcome : souhaité la bienvenue ***')
  }
  
});
client.on('message', msg => {
  if (msg.content === 'wc?close') {
    msg.reply('***le serveur est actuellement en développement, nous n`avons pas de date pour le moment ***')
  }
  
});
client.on('message', msg => {
  if (msg.content === 'wc?welcome') {
    msg.reply('***[FR] Bonjour et bienvenue sur le discord de WaltCraft [EN] Hello and welcome to the discord of WaltCraft***')
  }

});
client.login('BO_TOKEN');
