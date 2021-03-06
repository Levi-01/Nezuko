const Discord = require("discord.js");
exports.run = (client, message, args) => { let every = message.guild.roles.cache.find(r => r.name === "@everyone"); 
message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

  message.channel.send('**🔒has been locked.**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lock"],
  kategori: "lock",
  permLevel: 3
};

exports.help = {
  name: "lock",
  description: "kanalın sohbetini kapatmaya yarar.",
  usage: "lock"
};
