const Discord = require("discord.js");
exports.run = (client, message, args) => { let every = message.guild.roles.cache.find(r => r.name === "@everyone"); 
message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

  message.channel.send("Chat Closed. To Open (botun prefixi) chat-open");
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
