const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

  message.channel.send("**🎆 Şanslı Sayını Buluyorum! 🎇**")
  .then(message => {

    var sanslisayim = [
      "🎉 Senin Şanslı Sayın 1 🎲",
      "🎉 Senin Şanslı Sayın 2 🎲",
      "🎉 Senin Şanslı Sayın 3 🎲",
      "🎉 Senin Şanslı Sayın 4 🎲",
      "🎉 Senin Şanslı Sayın 5 🎲",
      "🎉 Senin Şanslı Sayın 6 🎲",
      "🎉 Senin Şanslı Sayın 7 🎲",
      "🎉 Senin Şanslı Sayın 8 🎲",
      "🎉 Senin Şanslı Sayın 9 🎲",
      "🎉 Senin Şanslı Sayın 10 🎲",
      "🎰 Senin Şanslı Sayın Yok Hü <:masum:809795501578518549>",
      "🎉 Senin Şanslı Sayın 11 🎲",
      "🎉 Senin Şanslı Sayın 12 🎲",
      "🎉 Senin Şanslı Sayın 13 🎲",
      "🎉 Senin Şanslı Sayın 14 🎲"
    ];

    var espri = sanslisayim[Math.floor(Math.random() * sanslisayim.length)];
    message.edit(`${espri}`);

  });
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lucky", "şanslı-sayım", "ş-s", "sayımşanslılan", "şs"],
  permLevel: 0
};

exports.help = {
  name: "şanslısayım",
  description: "Şanslı Sayınızı Bulmaya Çalışır",
  usage: "şanslı sayını tahmin eder"
};
