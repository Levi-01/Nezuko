const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`Nezuko Bot`)
.setDescription(`


:white_small_square: **=**  \`animegif\` : **Anime gif random**
:white_small_square: **=**  \`boygif\` :  **Boy gif random**
:white_small_square: **=**  \`babygif\` :  **Baby gif random**
:white_small_square: **=**  \`girlgif\` :  **Girl gif random**
:white_small_square: **=**  \`giphy\` : **Search your text**
:white_small_square: **=**  \`smoke\` : **Smoke gif random**
:white_small_square: **=**  \`bff\` : **Bff gif random**
:white_small_square: **=**  \`streamer\` : **Streamer gif random**
:white_small_square: **=**  \`movie\` : **character gif random**
:white_small_square: **=**  \`neon\` : **neon gif random**
:white_small_square: **=**  \`couple\` : ** relationship gif random**
`)
.setImage("https://i.pinimg.com/originals/53/2e/2c/532e2cf9de6aadca17b775637974fe9b.gif")
.setThumbnail(client.user.avatarURL())
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
