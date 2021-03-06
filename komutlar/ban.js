const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");


exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) 
return message.channel.send(`To Use This Command "\`Yönetici\`" You Must Have Authority.`);
  let acebot = new Discord.MessageEmbed().setColor('#70ff70').setFooter(` ${message.author.tag} `).setTimestamp();
  let user = message.mentions.users.first()
    let prefix = ayarlar.prefix
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
    if(!user) return message.channel.send(acebot.setDescription(`**> Misuse...**\n> **You should tag a contact!**\n > Sample Usage: **\`${prefix}ban @user < reason >\`**`))
    if(user.id === message.author.id) return message.channel.send(acebot.setDescription('You can't ban yourself.'))
    if(user.id === client.user.id) return message.channel.send(acebot.setDescription('You can't ban the bot.'))
    if(user.id === message.guild.ownerID) return message.channel.send(acebot.setDescription ('You can't ban the server owner.'))
    if (!message.guild.member(user).bannable) return message.channel.send(acebot.setDescription(`This person's role is above you or has the authority to Ban member`));



   message.guild.members.cache.get(user.id).ban({reason: `${sebep}`})
      let embed = acebot.setDescription(`${user} named user ${message.author.tag} By \`${sebep}\` banned for reasons. `)

};
 

 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:[],
  permlevel: 0
};

exports.help = {
  name: "ban"
}
