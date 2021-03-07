const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require(`../ayarlar.json`);
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('#FC3581','#FE4A68') 
.setTitle(`My prefix is (${prefix})`)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setDescription(`
> __Global Commands__\`✨\`
avatar / info /
ping / gifs / moderation
> __Vip Commands__\`🔥\`
gifs / moderation / funny / games
`)



.setFooter(`${message.author.tag} `, message.author.avatarURL)
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help','h'],
permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'partical',
  usage: 'help'
};
