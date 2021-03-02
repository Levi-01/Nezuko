const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
const codework = message.mentions.users.first()
let user;
  
if (message.mentions.users.first())  {user = message.mentions.users.first();}
  
else {user = message.author;}
  
return message.channel.send(new Discord.MessageEmbed()
                            

.setDescription(`**[Avatar link]** (${user.avatarURL()})`)                       
.setFooter(`Requested by(${user.tag})`).setTimestamp()                     
.setImage(user.avatarURL({ format: 'png', dynamic: true, size: 1024})))

};


exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['avatar','Avatar'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'avatar'
    
  };
