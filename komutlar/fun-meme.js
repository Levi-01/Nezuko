const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

exports.run = async (bot, message, args) => {

        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle("meme!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["meme"],
  permLevel: 0
};

exports.help = {
  name: "meme",
  description: "meme",
  usage: "meme"
};
