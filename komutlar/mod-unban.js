const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
  let prefix = ayarlar.prefix
  if(!message.member.hasPermission("BAN_MEMBERS")) return;
  if(!message.guild.members.cache.get(client.user.id).hasPermission("BAN_MEMBERS")) return;
     let kişi = message.guild.members.get.first()
     let sebep = args.slice(1).join(" ")
     if(!kişi) {
       const ikrud = new Discord.MessageEmbed()
.setColor("#ff0000")
.setDescription(`${prefix}unban User`)
return message.channel.send(ikrud)
     }
     if(!sebep) sebep = `Sebep: Belirtilmemiş`
     if(kişi.id === message.guild.ownerID) {
       const pekabot = new Discord.MessageEmbed()
.setColor("#ff0000")
.setDescription(`** You Can t Discard a Server Owner!**`).then(x => x.delete({ timeout: 5000 }));

return message.channel.send(pekabot)
     }
     if(kişi.id === client.user.id) {
       const pekabot = new Discord.MessageEmbed()
.setColor("#ff0000")
.setDescription(`** You re Going to Dump Me?**`).then(x => x.delete({ timeout: 5000 }));

return message.channel.send(pekabot)
     }
     if(kişi.id === message.author.id) {
       const peka = new Discord.MessageEmbed()
.setColor("#ff0000")
.setDescription(`** You Can t Throw Yourself Off the Server!**`).then(x => x.delete({ timeout: 5000 }));

return message.channel.send(peka)
     }
     message.guild.member(kişi).unban({ reason: `Reason: ${sebep} | By: ${message.author.tag}` })
 const ikrudka = new Discord.MessageEmbed()
.setColor("#ffcb00")
.setDescription(`**<@${kişi.id}> Named Member UnBanned From Server**`)
return message.channel.send(ikrudka)
   }
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['unban',"unbanned"],
    permLevel: 0
};
  exports.help = {
    name: 'unban',      
    description: 'Belirtilen Kişiyi Sunucudan Kickler',
    usage: 'unban <kullanıcı>'
};
