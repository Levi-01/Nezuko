const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const moment = require('moment')
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
  
const permError = new MessageEmbed()
    .setColor('RED')
    .setTitle('Failed')
    .setAuthor(message.author.tag, message.author.avatarURL({ size:1024, dynamic:true, format: "png"}))
    .setDescription(`To Use This Command <@&${ayarlar.banYetkiliRolID}> You Must Have Authority!`) 
  
if (!message.member.roles.cache.has(ayarlar.banYetkiliRolID)) return message.channel.send(permError); 

const banlog = message.guild.channels.cache.find(c => c.id === ayarlar.unbanLogKanalID)

  
let kisi = await client.users.fetch(args[0]);
if(!kisi) return message.channel.send(new MessageEmbed().setDescription(`${message.author} you must specify an ID.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

message.guild.members.unban(kisi.id)
message.channel.send(new MessageEmbed().setDescription(`${message.author} By ${kisi} user's server ban has been lifted.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic:true }))).then(x => x.delete({ timeout: 5000}))
  
message.react('✅')
banlog.send(new MessageEmbed().setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setDescription(`**Sunucudan Yasağı Kaldırıldı !**\n**Kaldıran Yetkili:** ${message.author} (\`${message.author.id}\`) \n**Banı Kaldırılan Üye:** ${kisi} (\`${kisi.id}\`) \n**Ban Kaldırma Tarihi:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\` `));

}
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unban", "yasak-kaldır"],
  permLvl: 0,
}

  exports.help = {
  name: 'unban'
}
