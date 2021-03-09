const Discord = require("discord.js");
const slots = ["🦁", "🦊", "🐼", "🐻", "🐸","🐱","🐶"];
const cooldown = new Set()
const cdtime =5;

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

if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ | Please wait for 5 second and try again!`).then(m=>{m.delete({timeout:cdtime * 200})})
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);

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
