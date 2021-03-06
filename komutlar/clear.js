const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES") return message.reply(`To use this command, you must have **Manage Messages** permission!`);
  
if(isNaN(args[0])) {
  var errembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(`You should write down a number.!`)
    .addField(`Proper Use:`, `${ayarlar.prefix}clear < number of messages to clear >`)
return message.channel.send(errembed);
}
  
if (args[0] < 1) return message.reply("**1** I can't delete less than menstrual messages!")
if (args[0] > 100) return message.reply("**100** I can't delete more than menstrual messages!")
  
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply("I couldn't delete any messages.! _(**14** I can't delete messages before the day!)_");
})
message.channel.send(`**${args[0]}** message successfully deleted!`)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil", "clear", "prune"],
  permLevel: 0
};

exports.help = {
  name: 'clear',
  category: 'moderasyon',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: '.sil <miktar>'
};
