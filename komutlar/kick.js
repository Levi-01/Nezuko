const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
const chalk = require("chalk");


exports.run = async (client, message, args) => {

if (!message.member.hasPermission("KICK_MEMBERS"))// Sadece Üyeleri At yetkisine sahip olanlar kullanabilcek
   return message.channel.send(`${message.author} Bu yetkiyi kullanabilmek için **Üyeleri At** yetkisine sahip olmak zorundasın.`);

 
 var kisi = message.mentions.users.first() || message.guild.members.cache.get(args[0]);// Kişi tanımlıyoz
 var sebep = args.slice(1).join(' ');// Sebep tanımlıyoz
 

 if(!kisi) return message.reply("Kickliyeceğin Kişiyi Belirtirmisin?" + " **__Örnek Kullanım__** " + "```.kick @Shréwd```", false )
 .then(x => x.delete({ timeout: 5000 }));

 if(!sebep) return message.reply("Sebep belirtirmisin?")
  

 if(!message.guild.member(kisi).kickable)// Eğer kullanıcı biri atmayı denerse ama yapamazsa hata verir
    return message.reply("Bu kişiyi kickleyemezsiniz.")

    
    message.guild.member(kisi).kick(sebep);// Kişi Kicklendi!

 

var kickaq = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
  .addField("Kicklenen Kişi Ve Sebebi", `Kicklenen Kişi: **${kisi}**\nKicklenme Nedeni: **${sebep}**`)
    return message.channel.send(kickaq);
};


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kick",
  description: "Sunucudan Birini Atar",
  usage: "kick {kisi} sebep"
};    
