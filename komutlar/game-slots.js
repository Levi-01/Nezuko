const slotItems = ["❤️", "🍑", "🍆", "🍎", "🍋"];
const db = require("quick.db");
const Discord = require('discord.js');  

exports.run = async (bot, message, args) => {

    let user = message.author;
    let balance = db.get(`account.${message.author.id}.balance`);
    let amount = parseInt(args[0]);
    let win = false;

    let moneymore = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`❌ You are betting more than you have`);

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`❌ Specify an amount`); 

    if (!amount) return message.channel.send(moneyhelp);
    if (amount > balance) return message.channel.send(moneymore);

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
        db.add(`${message.author.id}`, amount)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost ${amount} coins`)
            .setColor("RED")
        message.channel.send(slotsEmbed)
        db.subtract(`${message.author.id}`, amount)
    }

}

exports.help = {
    name: "slot",
    description: "An efficient way to double your money.",
    usage: "",
    example: "gamble 500"
}

exports.conf = {
    aliases: ["slot"],
    cooldown: 5
}
