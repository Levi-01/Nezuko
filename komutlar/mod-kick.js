const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = function (client, message, args) {

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.reply(`Bu yetkiyi kullanabilmek için **Kullanıcıları At** yetkisine sahip olmak zorundasın.`);

      //-----------------------KOD-BAŞLANGIÇ-----------------------\\

      let Undefined = message.mentions.users.first() || message.guild.members.cache.get(args[0]);  // undefined
      let sebep = args.slice(1).join(' ');
      let kickkanal = ayarlar.kicklog;

      if(!Undefined) return message.reply("Kickleyeceğin Kişiyi Belirtirmisin.")  // undefined

      if(!sebep) return message.reply("Kickleme Sebebini Belirtirmisin.")

      if(Undefined.id === message.author.id) return message.reply("Kendini Kickleyemezsin.")

      if(!message.guild.member(Undefined).kickable) return message.reply("Bu Kişiyi Kickleyemezsin!")

        
        message.guild.member(Undefined).kick(sebep)

.then(() => {
          setTimeout(function() {
    
          message.delete()
          },5000);
        })
            
          
         const kicklendi = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.avatarURL())
         .setTitle("Sunucudan Bir Kullanıcı Kicklendi!")
         .setColor("0x348f36")
         .setDescription(`
           
              Kickleyen Yetkili » ${message.author} (\`${message.author.id}\`)
              Kicklenen Kullanıcı » ${Undefined} (\`${Undefined.id}\`)
              Sebep » \`${sebep}\`

            `)
         .setFooter("undefined ❤️ Copé")
         .setTimestamp()
         
         client.channels.cache
         .get(kickkanal)
         .send(kicklendi)
         
  }

exports.conf = {
  enabled: true,
  aliases: ['kick'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'kick',
  usage: 'kick'
};
