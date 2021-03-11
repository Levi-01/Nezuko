const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒"];
const db = require("quick.db");
const Discord = require("discord.js");  

exports.run = async (bot, message, args) => {

    let user = message.author;
    let balance = await db.fetch(`money_${user.id}`)
    let amount = parseInt(args[0]);
    let win = false;

    if (!amount) return message.channel.send("Please insert an amount first.");
    if (isNaN(amount)) return message.channel.send("The amount was not a number.");
    if (amount > balance || !balance || balance === 0) return message.channel.send("You don't have enough money."); 

    let number = []
    for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2])  { 
        amount *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        amount *= 3
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou won ${amount} coins`)
            .setColor("GREEN")
        message.channel.send(slotsEmbed1)
        db.add(`money_${user.id}`, amount)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost ${amount} coins`)
            .setColor("GREEN")
        message.channel.send(slotsEmbed)
        db.subtract(`money_${user.id}`, amount)
    }

}

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
