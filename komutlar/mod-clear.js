const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  
  let embed = new Discord.MessageEmbed()
    .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
    .setColor("RANDOM")
    .setTimestamp();

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(embed
      .setDescription("To use this command, you must have **Manage Messages** permission!"))
      .then(x => x.delete({ timeout: 5000 }));


    if(!args[0] ||
    (args[0] && isNaN(args[0])) ||
    Number(args[0]) < 1 ||
    Number(args[0]) > 100 )

    return message.channel.send(embed
      .setDescription("1-100 must specify the amount of messages to delete between!"))
      .then(x => x.delete({ timeout: 5000 }));


  await message.delete()
  .catch();

  message.channel
    .bulkDelete(Number(args[0]))
    .then(mesajlar => message.channel.send(embed

    .setDescription(`Successfully deleted **${mesajlar.size}** messages `))
    .then(x => x.delete({ timeout: 5000 })))
    .catch();
};

exports.conf = {
  aliases: ["sil", "clear"],
  usage: "temizle 1-100",
  description: "Belirtilen mesaj sayısı kadar mesaj temizler."
};

exports.help = {
  name: "temizle"
};

