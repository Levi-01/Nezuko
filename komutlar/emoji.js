const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let emojiname = args[0];

    const emoji = (message.guild.emojis.find("name", `${emojiname}`))

    if (!emojiname) { 
      
       const embed2 = new Discord.RichEmbed()

     .setColor("BLACK")
     .setDescription("You Didn't Specify an Emoji Name?")
       
       return message.channel.send(embed2)

    }

    const embed = new Discord.RichEmbed()

    .setColor("RANDOM")

    .addField("Emoji Name", `${emojiname}`)

    .addField("Emoji ID", `${emoji.id}`)

    .addField("Link", `${emoji.url}`)

    .setTimestamp()

    message.channel.send(embed)

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ["emojid"],

    permLevel: 0

}

exports.help = {

    name: 'emoji-bilgi',

}
