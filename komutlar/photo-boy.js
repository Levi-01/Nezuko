const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://i.pinimg.com/736x/35/2a/52/352a52e7443026e3aa4498c00fb709e8.jpg"]

let result = Math.floor((Math.random() * replies.length));

let photoembed = new Discord.MessageEmbed()


.setColor("RANDOM")

.setTimestamp()

.setImage(replies[result]);

message.channel.send(photoembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['photoboy','imageboy'],

  permLevel: 0

};

exports.help = {

  name: 'pboy',

  description: 'lrowsxrd',

  usage: 'pboy'

};
