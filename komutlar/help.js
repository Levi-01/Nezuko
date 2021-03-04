const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require(`../ayarlar.json`);
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('#FFC0CB') 
.setTitle(`My prefix is (${prefix})`)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setDescription(`
> __Global Commands__\`✨\`
avatar / info /
ping / gifs
> __Gifs Commands__\`🔥\`
neon / boy / girl /
anime / emoji / couple /
giphy / baby / smoke / bff / movie 
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
