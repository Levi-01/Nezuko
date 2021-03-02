const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`GİF LANDS BOT - YARDIM MENÜSÜ`)
.setDescription(`


:white_small_square: **=**  \`?anime-gif\` : **Anime gif atar**
:white_small_square: **=**  \`?man-gif\`:  **Adam gifi atar**
:white_small_square: **=**  \`?baby-gif\` :  **Bebek gifi atar**
:white_small_square: **=**  \`?woman-gif\` :  **Kadın gifi atar**
:white_small_square: **=**  \`?animal-gif\`: **Hayvan gifi atar**
`)
.setImage("https://api.creavite.co/out/84ba34f0-d8ba-49b7-9ecf-fc0849f2d671_standard.gif")
.setThumbnail("https://cdn.discordapp.com/emojis/790170217900670986.gif?v=1")
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['gifs'], 
  permLevel: 0
};

exports.help = {
  name: "gif",
  description: 'Bizim yaptığımız bir gif kodu.',
  usage: 'gif'
};
