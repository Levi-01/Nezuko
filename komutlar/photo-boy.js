const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://pin.it/2DpgQtY"]

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()


.setColor("RANDOM")

.setTimestamp()

.setImage(replies[result]);

message.channel.send(gifembed);

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
