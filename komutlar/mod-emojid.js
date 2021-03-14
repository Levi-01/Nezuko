const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const { parse } = require("twemoji-parser");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

        if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
             let embed2 = new Discord.RichEmbed()
        .setAuthor('Permission Error', `https://media.discordapp.net/attachments/734808865941618809/734841393113202768/invite.png`)
        .setColor('RED')
        .setDescription('`❌` You Need `MANAGE_EMOJIS` Permission To Use This Command');
      return message.channel.send(embed2)
        }

        const emoji = args[0];
        if (!emoji) 
        var embed5 = new Discord.RichEmbed()
        .setAuthor('Permission Error', `https://media.discordapp.net/attachments/734808865941618809/734841393113202768/invite.png`)
        .setColor('RED')
        .setDescription('`❌` You Need To Select A Valid Emoji To Use This.');
    return message.channel.send(embed5);

        let customemoji = Discord.Util.parseEmoji(emoji);
        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"
                }`;
            const name = args.slice(1).join(" ");
            try {
                const Added = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle(`${client.emotes.verified} Emoji Added`)
                .setDescription(
                `${client.emotes.verified} Emoji Has Been Added! | Name : ${name || `${customemoji.name}`} | Preview : [Click Me](${Link})`
                    );
                await message.guild.emojis.create(
                    `${Link}`,
                    `${name || `${customemoji.name}`}`
                )
                return message.channel.send(Added)
            } catch (err) {
                console.log(err)
                return message.channel.send(`${client.emotes.error} An error has occured!\n\n**Possible Reasons:**\n\`\`\`- This server has reached the emojis limit\n- The bot doesn't have permissions.\n- The emojis size is too big.\`\`\``)
           
            }
        } else {
            let CheckEmoji = parse(emoji, { assetType: "png" });
            if (!CheckEmoji[0])
                return message.channel.send(`${client.emotes.error} **Please Give Me A Valid Emoji!**`);
            message.channel.send(
                `${client.emotes.error} **You Can Use Normal Emoji Without Adding In Server!**`
            );
        }

    }


exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['2'],

  permLevel: 0

};

exports.help = {

  name: 'emojidisplay',

  description: "Darknes Code",

  usage: 'emojid'

};
