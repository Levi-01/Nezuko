const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.wallpapersafari.com/47/58/l0RTIB.jpg"]

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
