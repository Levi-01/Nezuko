const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
  let prefix = ayarlar.prefix
  if(!message.member.hasPermission("KICK_MEMBERS")) return;
  if(!message.guild.members.cache.get(client.user.id).hasPermission("KICK_MEMBERS")) return;
     let kişi = message.mentions.users.first()
     let sebep = args.slice(1).join(" ")
     if(!kişi) {
       const ikrud = new Discord.MessageEmbed()
.setColor("#ff0000")
.setDescription(`**${prefix}kick ```user```**`)
return message.channel.send(ikrud)
     }
     if(!sebep) sebep = `Sebep: Belirtilmemiş`
     if(kişi.id === message.guild.ownerID) {
       const pekabot = new Discord.MessageEmbed()
.setColor("#ff0000")
.setDescription(`** You Can't Discard a Server Owner!**`)
return message.channel.send(pekabot)
     }
     if(kişi.id === client.user.id) {
       const pekabot = new Discord.MessageEmbed()
.setColor("#ff0000")
.setDescription(`** You're Going to Dump Me?**`)
return message.channel.send(pekabot)
     }
     if(kişi.id === message.author.id) {
       const peka = new Discord.MessageEmbed()
.setColor("#ff0000")
.setDescription(`** You Can't Throw Yourself Off the Server!**`)
return message.channel.send(peka)
     }
     message.guild.member(kişi).kick({ reason: `Sebep: ${sebep} | Kullanıcıyı Atan Kişi ${message.author.tag}` })
 const ikrudka = new Discord.MessageEmbed()
.setColor("#ffcb00")
.setDescription(`**<@${kişi.user.tag}> Named Member Kicked From Server**`)
return message.channel.send(ikrudka)
   }
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kickle',"at"],
    permLevel: 0
};
  exports.help = {
    name: 'kick',      
    description: 'Belirtilen Kişiyi Sunucudan Kickler',
    usage: 'kick <kullanıcı>'
};
