const Discord = require('discord.js');

const fs = require('fs');

exports.run = (client, message, args) => {

  

if (!message.guild) {

  

const ozelmesajuyari = new Discord.MessageEmbed()

.setTitle('UYARI')

.setColor('RED')

.setAuthor(message.author.username, message.author.avatarURL)

.setDescription('Lütfen bu komudu özelde kullanmak yerine ekli olduğum sunucuda kullan.')

return message.author.send(ozelmesajuyari);

}

  

let guild = message.guild

let reason = args.slice(1).join(' ');

let dızcılaraselam = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.channel.send(`**Please Enter A Name!**`).catch(console.error);

if (!message.guild.member(dızcılaraselam).bannable) return message.channel.send(`**Cant Kick That User**!`);

  

message.guild.member(dızcılaraselam).kick();

message.channel.send("**Please Provide A Valid Username, Tag Or ID Or The User Is Not Kick!**")

     

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
