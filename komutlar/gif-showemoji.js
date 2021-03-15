const Discord = require("discord.js");

exports.run = async (client, message, args) => {
       
    try{

        if (!args[0]) return message.channel.send("You have to specify an emoji.")//ustedes definen los args
 
        var emoji = Discord.Util.parseEmoji(args[0]);

        if(emoji.id == null) return message.channel.send("Please enter a valid emoji.");

        const embedEmoji = new Discord.MessageEmbed()
        .setAuthor('Show Emoji',message.author.avatarURL())
        .setDescription(`\`${emoji.name}\` \`${emoji.id}\``)
        .setImage(`https://cdn.discordapp.com/emojis/${emoji.id}.${(emoji.animated ? 'gif': 'png')}`)
        .setColor('RANDOM')
        .setFooter(emojis.length)
        message.channel.send(embedEmoji)

        } catch(e) {
        message.channel.send(`**${e.name}:** ${e.message}`);
      };

  }

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['showemoji'],

  permLevel: 0

};

exports.help = {

  name: 'showemoji',

  description: 'lrowsxrd',

  usage: 'showemoji'

};
