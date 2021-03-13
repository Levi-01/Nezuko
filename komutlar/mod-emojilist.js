const Discord = require("discord.js");

exports.run = async(client, msg, args) => {

        let animEmotes = [],
            staticEmotes = [];
  var guild = msg.guild

        guild.emojis.cache.forEach((e) => {
            e.animated ? animEmotes.push(`<a:${e.name}:${e.id}>`) : staticEmotes.push(`<:${e.name}:${e.id}>`);
        });
        staticEmotes = staticEmotes.length !== 0 ? `__**[${staticEmotes.length}] Normal Emoji**__\n${staticEmotes.join('')}` : '\n**Normal Emojis**';
        animEmotes = animEmotes.length !== 0 ? `\n\n__**[${animEmotes.length}] Hareketli Emoji**__\n${animEmotes.join('')}` : '\n**Moving Emojis**';
        try {     
  let botembed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(staticEmotes + animEmotes)
            .setAuthor(`${msg.guild.name} Server Emojis `, msg.guild.iconURL())
    .setFooter('User using this command ' + msg.author.tag, msg.author.avatarURL())
            .setTimestamp()
        return msg.channel.send(botembed)
      } catch (err) {
        const embed = new Discord.MessageEmbed()
            .addField(`Emojis On The Server`, 'Im sorry but your server either has too many emojis or you don t have any emojis at all I can t show them Discord won t allow it..')
            .setColor('RED')
          .setFooter('User using this command ' + msg.author.tag, msg.author.avatarURL())
            .setTimestamp()
        msg.channel.send(embed)
                              
    }
}
//GNARGE BOT ALTYAPISIN'DAN BU DOSYAYA AKTARILMIŞTIR!
exports.conf = {
 aliases: ['emoji-liste','emojilist'],
 permLevel: 0,
 kategori: 'Sunucu'
};

exports.help = {
 name: 'emojiler',
 description: 'Sunucudaki tüm emojileri gösterir.',
 usage: 'emojiler'
};
