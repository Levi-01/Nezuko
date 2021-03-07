const Discord = require('discord.js');
const superagent = require('superagent');
const ayarlar = require('./ayarlar.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("kime vurcam ");
    if(message.mentions.users.first().id === "242263403001937920") return message.reply(':flushed:');
    if (message.mentions.users.first().id == client.user.id && message.author.id === "526055697587240960"){
      const { body } = await superagent
      .get("https://nekos.life/api/v2/img/slap");
      
      const embed = new Discord.MessageEmbed()
      .setColor("#ff9900")
      .setTitle(`No u! *slaps*${message.mentions.users.first().username}`)
      .setImage(body.url) 
      .setTimestamp();
      return message.channel.send({embed})
    }else if (message.mentions.users.first().id == client.user.id && message.author.id !== "526055697587240960"){
      return message.channel.send("NUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU ")
    }
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`Nezuko, ${message.mentions.users.first().username} You got slapped by ${message.author.username}`)
    .setImage(body.url) 
    .setFooter(`© SFXBot by ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['slap'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'slap',
    description: 'Slaps someone OwO',
    usage: 'slap'
  };
