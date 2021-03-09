const Discord = require("discord.js");
const slots = ["🦁", "🦊", "🐼", "🐻", "🐸"];

exports.run = function(client, message) {
  var slot1 = slots[Math.floor(Math.random() * slots.length)];
  var slot2 = slots[Math.floor(Math.random() * slots.length)];
  var slot3 = slots[Math.floor(Math.random() * slots.length)];

  if (slot1 === slot2 && slot1 === slot3) {
    message.channel.send(`
\`___Slot___\`
 ${slot1}\`|\`${slot2}\`|\`${slot3}\`
       |      |
       |      |
___ You've won___\`
        `);
  } else {
    message.channel.send(`
\`___Slot___\`
${slot1}\`|\`${slot2}\`|\`${slot3}\`
      |     |
      |     |
___ you lost___\`
        `);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slots"],
  permLevel: 0
};

exports.help = {
  name: "slots",
  description: "Slots oyunu oynatır",
  usage: "slots"
};
