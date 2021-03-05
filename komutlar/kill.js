const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://tenor.com/view/wasted-haikyuu-anime-gif-19554371","https://tenor.com/view/mio-ritsu-ritsu-tainaka-mio-akiyama-kon-gif-19396355","https://tenor.com/view/anime-wasted-hit-dont-lean-nope-gif-17641117","https://media1.tenor.com/images/5c386f2acaaa54817959949f89c0a3a1/tenor.gif?itemid=19322752","https://media.tenor.com/images/6192dbf540b3a5f2e5fb8b972d2856a4/tenor.gif","https://media1.tenor.com/images/fd3a97de0742ced9ab30e9a2d75f2f4a/tenor.gif?itemid=14639602","https://media1.tenor.com/images/4164506fc74c0731c80aaf89f331f959/tenor.gif?itemid=14778256","https://media1.tenor.com/images/55507aea306782b916659085fc062909/tenor.gif?itemid=8932977"]

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()


.setColor("RANDOM")

.setTimestamp()

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Kill','kill','killed','killer'],

  permLevel: 0

};

exports.help = {

  name: 'kill',

  description: 'Darknes Code',

  usage: 'kill'

};
