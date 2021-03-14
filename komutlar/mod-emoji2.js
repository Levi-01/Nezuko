const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return bot.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new Discord.MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name}.`)
     .setAuthor('Emote In Guild', `https://media.discordapp.net/attachments/734808865941618809/734841393113202768/invite.png`)
      .setDescription(`<a:check:727775604526809088> **Animated [${Animated}]**:\n${EmojisAnimated}\n\n<:checkk1:728616715898060801> **Standard [${EmojiCount}]**:\n${Emojis}\n\n<:checkk1:728616715898060801> **Over all emojis [${OverallEmojis}]**`)
      .setColor('BLUE');
      message.channel.send(Embed);
  }

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['2'],

  permLevel: 0

};

exports.help = {

  name: 'emojilist',

  description: "Darknes Code",

  usage: 'emojilist'

};
