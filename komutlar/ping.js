const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  
const darknes = new Discord.MessageEmbed()

.setColor("#FFA500")
.setDescription('loading...')

let start = Date.now(); 
let mesaj = await message.channel.send(darknes)
let diff = (Date.now() - start); 
let API = (app.ws.ping).toFixed(2)
    
setInterval(() => {
        
const only = new Discord.MessageEmbed()

.setDescription(`\nMessage; **${diff}ms** \n\nBot ; **${API}ms**`)

mesaj.edit(only);
      
}, 5000)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Darknes Code',
  usage: 'ping'
};
