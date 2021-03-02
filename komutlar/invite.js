const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
        
.setTitle(`${client.user.username}`) 


.setDescription(`[Add to your server](https://discord.com/api/oauth2/authorize?client_id=816089794002157598&permissions=8&scope=bot) **|** [Support](https://discord.gg/emX4EmamKR)`) 
.setThumbnail(client.user.avatarURL())
.setFooter(`${message.author.username} Başarıyla Davet Sistemi Kullandı!`, message.author.avatarURL())
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
