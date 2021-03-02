const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
        
.setTitle(`${client.user.username}`) 

.addField("Yapımcılarım ", " <@733616760116215868>")

.setDescription(`**Add Bot ;** [invite](BOTUNUZUN DAVET LINKI) \n**Destek Sunucusu ;** [Server](BOTUNUZUN DAVET LINKI)`) 
.setThumbnail(client.user.avatarURL)
.setFooter(`${message.author.username} Başarıyla Davet Sistemi Kullandı!`, message.author.avatarURL)
.setColor("BLACK")

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
