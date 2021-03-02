const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!args[1]) return message.reply("ni||nj||a what do i say")
  let text = args.slice(1).join(' ')

  message.channel.send(text)
}

exports.help = {
  name: 'say'
};

exports.run = (client, message, args) => {
  if(!args[1]) return message.reply("ni||nj||a what do i say")
  let text = args.slice(1).join(' ')
  let sayEmbed = new Discord.RichEmbed()
  .setColor("0xe46c09")
  .setAuthor(" ")
  .setDescription(text)
  message.channel.send(sayEmbed)
  message.delete();
}

exports.help = {
  name: 'say'
};
