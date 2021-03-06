const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix

    //herkese açık mı yöneticilere özel mi?
    exports.run = async (client, message, args) => {
        var rolid = message.mentions.roles.first()
        var kisi = message.mentions.members.first()

        if(!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send('You don t have the authority to do this!')
        }

        if(!rolid) return message.channel.send(`role <tag> user <tag> `)
        if(!kisi) return message.channel.send(`Rol Verilecek Kullanıcıyı Etiketlemelisin! \n **Doğru Kullanım: "${prefix}yetki-ver <rol> <kullanıcı>"** `)

        kisi.roles.add(rolid)
        return message.channel.send(`İstediğiniz Gibi ${kisi} Adlı Kullanıcıya , ${rolid} Yetkisini Verdim! `)

    }

exports.conf = {
    enabled: 'true',
    guildOnly: 'true',
    aliases: ['role'],
    permLevel: 0
    }
    
    exports.help = {
    name: 'rolver'
    }
