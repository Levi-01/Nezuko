const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require(`../ayarlar.json`);
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('BLACK') 
.setTitle(`My prefix is (${prefix})`)
.setThumbnail(message.author.avatarURL())
.setTimestamp()
.setDescription(`
> __Moderation Commands__\`⚙️\`
clear / lock / unlock / nickname / role / kick / ban / unban
`)



.setFooter(`${message.author.tag} `, client.user.avatarURL())
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['mod','m'],
permLevel: 0
};

exports.help = {
  name: 'moderation',
  description: 'partical',
  usage: 'moderation'
};
