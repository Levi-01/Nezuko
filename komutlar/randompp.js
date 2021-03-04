const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {// MHMT CODE SHARE

if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Senin bu komutu kullanmaya yetkin yetmiyor.')
if(!args[0]) return message.channel.send('**random-pp-gif ayarla/sıfırla #kanal**')

let arglar = ['ayarla', 'sıfırla']
if(!arglar.includes(args[0])) return message.channel.send('random-pp-gif ayarla/sıfırla #kanal')



if(args[0] === 'ayarla') {

const ads = await data.fetch(`random.${message.guild.id}`)
if(ads) return message.channel.send('Zaten sistem ayarlı.')
if(!args[1]) return message.channel.send('Bir kanal etiketlemelisin.')

let ch = message.mentions.channels.first()
if(!ch) return message.channel.send(`#${args[1]}, kanalını bu sunucuda bulamıyorum.`)

data.set(`random.${message.guild.id}`, ch.id)
message.channel.send(`Random pp-gif kanalı: ${ch} olarak ayarlandı.`)} else if(args[0] === 'sıfırla') {

 const ads = await data.fetch(`random.${message.guild.id}`)
 if(!ads) return message.channel.send('Zaten sistem ayarlı değil.')

 data.delete(`random.${message.guild.id}`)
 message.channel.send(`Random pp-gif kanalı sıfırlandı.`)
}



}
exports.conf = {
enabled: 'true',
guildOnly: 'true',
aliases: ['randompp']
}

exports.help = {
name: 'random-pp-gif'
}// MHMT CODE SHARE
