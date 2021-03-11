const Discord = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (bot, message, args) => { 
    const apiKey = message.client.apiKeys.catApi;
    try {
      const res = await fetch('https://api.tenorapi.com/v1/images/search', { headers: { 'TW6LBHJR1ZWL': apiKey }});
      const img = (await res.json())[0].url;
      const embed = new Discord.MessageEmbed()
        .setTitle('🐱  Meow!  🐱')
        .setImage(img)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
      message.channel.send(embed);
    } catch (err) {
      message.client.logger.error(err.stack);
      this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
    }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cat"],
  permLevel: 0
};

exports.help = {
  name: "cat",
  description: "meow",
  usage: "cat"
};
