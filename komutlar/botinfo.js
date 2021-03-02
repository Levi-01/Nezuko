const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');

process.setMaxListeners(0);

require("moment-duration-format");

exports.run = async (bot, message, args) => {
  
  const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
  const istatistikler = new Discord.MessageEmbed()
  
  .setColor('#FFA500')
  
  .setFooter('Nezuko', bot.user.avatarURL())
  
  .addField("» **Owner bot**", "<@721586986615439372>")
  .addField("» **Memory usage**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Uptime**", seksizaman)
  .addField("» **Servers**", `${bot.guilds.cache.size}`)
  .addField("» **Members**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Discord.JS**", "v"+Discord.version, true)
  .addField("» **Node.JS**", `${process.version}`, true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **Operating System**", `\`\`${os.platform()}\`\``) 
 
  
  return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Darknes Code",
  usage: "istatistik"
};
