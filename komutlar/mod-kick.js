const Discord = require('discord.js');

const fs = require('fs');

exports.run = (client, message, args) => {

  

if (!message.guild) {

  

const ozelmesajuyari = new Discord.MessageEmbed()

.setTitle('Warning')

.setColor('RED')

.setAuthor(message.author.username, message.author.avatarURL())

.setDescription('Please use this commune on the server I m attached to instead of using it privately.')

return message.author.send(ozelmesajuyari);

}

  

let guild = message.guild

let reason = args.slice(1).join(' ');

let dızcılaraselam = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.channel.send(`**Please Enter A Name!**`).catch(console.error);

if (!message.guild.member(dızcılaraselam).bannable) return message.channel.send(`**Cant Kick That User**!`);

  

message.guild.member(dızcılaraselam).kick();

message.channel.send(`**${dızcılaraselam} Kicked from the server!**`)

     

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['at'],

  permLevel: 3

};

exports.help = {

  name: 'kick',

  description: 'İstediğiniz kişiyi sunucudan atar.',

  usage: 'kick <@kullanıcı> <sebep>',

 

};
