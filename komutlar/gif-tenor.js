const request = require('request-promise-native');
const Discord = require("discord.js");

exports.run = async (Bastion, message, args) => {

try {

if (args.length < 1) {

const embed = new Discord.MessageEmbed()

.setColor("#FFA500")
.setDescription("**Search**: <your need gif>");
      
return message.channel.send(embed);
      
}
    
let options = {

url: 'http://api.tenor.com/v1/gifs/search',

qs: {

q: encodeURI(args.join('+')),

api_key: 'TW6LBHJR1ZWL',

limit: 10,

offset: 0

},

json: true

};

let response = await request(options);

if (response.data.length) {

const embed = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTimestamp()
.setDescription(`GiphyGif : ${args.join(' ')}`.slice(0, 256))
.setImage(response.data[Math.floor(Math.random() * response.data.length)].images.original.url)

return message.channel.send(embed);
}

else {

return Bastion.emit('Hata', '', Bastion.i18n.error(message.guild.language, 'Bulunamadı', 'Görsel'), message.channel);

}

}
  
catch (e) {

if (e.response) {

return Bastion.emit('Hata', e.response.statusCode, e.response.statusMessage, message.channel);

}

console.log(e);

}

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['tenor'],

  permLevel: 0

};

exports.help = {

  name: 'gif-tenor',

  description: "Darknes Code",

  usage: 'gif-tenor'

};
