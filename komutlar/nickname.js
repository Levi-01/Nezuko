const discord = require('discord.js')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`To Use This Command, You Must Have **Manage UserNames** Authorization.`);
  
let kinsta = message.mentions.members.first()
if (!kinsta) return message.channel.send(`You must tag a user.`)

let isim = args.slice(1).join(' ')
if (!kinsta) return message.channel.send(`Enter the name to change.`)

kinsta.setNickname(isim)
message.channel.send(`${kinsta} User's New NickName Set to **${isim}\**!`)
}

exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['isim', 'nickname', 'isimdeğiştir', 'değiştir-isim'],
  permlevel: 0
}
exports.help = {
  name: 'isim-değiştir',
  usage: 'Kinsta Code & Only V12',
  description: 'isim-değiştir'
}
