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
.setDescription(`[Add to your server](https://discord.com/api/oauth2/authorize?client_id=816089794002157598&permissions=8&scope=bot) **|** [Support](https://discord.gg/EKwREXxUdn)`)
.addField("**🌙 Info Commands**", `invite • info • ping • avatar • showemoji`, true)
.addField("**🌙 Gifs Commands**", `anime • girl • boy • animal • couple • bff • movies • giphy • neon • smoke • streamer`, true)
.addField("**🌙 Mod Commands**", `clear • lock • unlock • kick • ban • role • nickname • addemoji • emojilist`, true)


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
