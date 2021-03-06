const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client ,message, args) => {
  
if(args[0] === 'aç') {
  
db.set(`${message.guild.id}.kufur`, true)
  
const kinda = new Discord.MessageEmbed()  
  
.setDescription(`Blasphemy Barrier Successfully!`)
.setColor("GREEN")

return message.channel.send(kinda)
}
  
if (args[0] === 'kapat') {
  
db.delete(`${message.guild.id}.kufur`)
  
const kinda = new Discord.MessageEmbed() 
  
.setDescription(`Blasphemy Barrier Successfully Deactivated!`)
.setColor("GREEN")
  
return message.channel.send(kinda)
}
{
  
const kinda = new Discord.MessageEmbed() 
  
.setDescription('Please type **on** Or **close**. Sample Usage : **${prefix}blasphemy-block on/off**')
.setColor("RED")

return message.channel.send(kinda)
}
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel','lock'], 
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'Kinda Code & Only V12.',
 usage: 'küfür-engel'
};
