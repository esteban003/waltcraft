const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'wc?help') {
    msg.reply('embed=discord.Embed(title="le help n'est pas encore disponible", url="https://image.noelshack.com/fichiers/2018/24/4/1529004253-logo1.png")
embed.set_author(name="WaltCraftBot", url="http://staff.waltcraft.eu/",, icon_url="https://image.noelshack.com/fichiers/2018/24/4/1529004253-logo1.png")
embed.set_thumbnail(url="https://image.noelshack.com/fichiers/2018/24/4/1529004253-logo1.png")
embed.add_field(name=TheDreamsRed, value=Copyright , inline=False)
embed.set_footer(text="WaltCraftbot par TheDreamsRed")
await self.bot.say(embed=embed)');
  }
});
client.login('NDA0MDMzNDQyMzM0OTAwMjI0.DgQCyw._IMh_h2J3v80pTmHBQrkwqXcE6Q');
