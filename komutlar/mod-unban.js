const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
  let prefix = ayarlar.prefix
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if (!User) return message.channel.send("Invalid User")
        if (User.hasPermission("BAN_MEMBERS")) return message.reply("Can't ban that one, he also can ban")
        let banReason = args.join(" ").slice(22);
        if (!banReason) {
            banReason = "None"
        }
        console.log(`USER = ${User}`)
        User.unban({reason: banReason})
        var UserID = User.id
        console.log(`USER ID = ${UserID}`)
    }

  
  
  
  
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unban'],
  permLevel: 0,
};

  exports.help = {
  name: 'unban',
  description: 'partical',
  usage: 'unban'
};
