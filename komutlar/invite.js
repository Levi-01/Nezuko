const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
        
.setTitle(`${client.user.username}`) 

.setTimestamp()
.setDescription(`[Add to your server](https://discord.com/api/oauth2/authorize?client_id=816089794002157598&permissions=8&scope=bot) **|** [Support](https://discord.gg/skPU9TaE)`) 
.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL())
.setColor("PNG")

return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invite','invites','davet'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'Darknes Code',
  usage: 'davet'
}; 
