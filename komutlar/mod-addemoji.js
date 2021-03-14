const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

exports.run = async (bot, message, args) => {
    
    if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      let embed2 = new Discord.RichEmbed()
        .setAuthor('Permission Error', `https://media.discordapp.net/attachments/734808865941618809/734841393113202768/invite.png`)
        .setColor(`${Color}`)
        .setDescription('`❌` You Need `MANAGE_EMOJIS` Permission To Use This Command');
      return message.channel.send(embed2)
    }
    const emoji = args.slice(0).join(","); 
    if (!emoji) 
    var embed5 = new Discord.RichEmbed()
        .setAuthor('Permission Error', `https://media.discordapp.net/attachments/734808865941618809/734841393113202768/invite.png`)
        .setColor(`${Color}`)
        .setDescription('`❌` You Need To Select A Valid Emoji To Use This.');
    return message.channel.send(embed5);
  
    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
message.guild.createEmoji(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
            let Added = new Discord.RichEmbed()
        .setAuthor('Emote Added', `https://media.discordapp.net/attachments/734808865941618809/734841393113202768/invite.png`)
        .setColor(`${Color}`)
        .setDescription(`\`✅\`Emoji Has Been Added! | Name : ${name || `${customemoji.name}`} | Preview : [Click Me](${Link})`);
      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        var embed = new Discord.RichEmbed()
        .setAuthor('Invalid Emote', `https://media.discordapp.net/attachments/734808865941618809/734841393113202768/invite.png`)
        .setColor(`${Color}`)
        .setDescription('`❌` You Need To Select A Valid Emoji To Use This.');
        return message.channel.send(embed);

    }
  }


exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['2'],

  permLevel: 0

};

exports.help = {

  name: 'addemoji',

  description: "Darknes Code",

  usage: 'addemoji'

};
