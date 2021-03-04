const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let emojiname = args[0];

    const emoji = (message.guild.emojis.cache.find("name", `${emojiname}`))

    if (!emojiname) { 
      
       const embed2 = new Discord.RichEmbed()

     .setColor("BLACK")
     .setDescription("You Did Not Specify Emoji Name?")
       
       return message.channel.send(embed2)

    }

    const embed = new Discord.RichEmbed()

    .setColor("RANDOM")

    .addField("Emoj Name", `${emojiname}`)

    .addField("Emoji ID", `${emoji.id}`)

    .addField("Link", `${emoji.url}`)

    .setTimestamp()

    message.channel.send(embed)

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ["emote"],

    permLevel: 0

}

exports.help = {

    name: 'emoji-bilgi',

}
