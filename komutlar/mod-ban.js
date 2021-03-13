const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone : true,
  fetchAllMembers : true
});
 
const config = require("./config.json");
const fs = require("fs");
const snekfetch = require('snekfetch');
 
//This SHOULD allow us to use the "client, message & args" async functions.(Example: message.author.id)
exports.run = async (client, message, args) => {
 
//This is your Command or Discord Rich Embed code Line followed by the end of the command. OR close "}" bracket
message.delete().catch();     
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    let modlog = message.guild.channels.find("name", "ninja-logs")
    if (!modlog) return message.channel.send('I cannot find a logs channel please create one named ninja-logs and try again');
  let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
  let server = message.channel.guild
  let banEmbed = new Discord.RichEmbed()
  .setColor(0xFF0000)
    .setTimestamp()
    .setTitle("Moderator Logs")
    .addField('Action:', ' Member Banned')
    .addField('User:', `<@${member.user.id}>#${member.user.discriminator} (${member.user.id})`)
    .addField('Moderator:', `<@${message.author.id}>#${message.author.discriminator}`)
    .addField('Reason For Action', reason)
    .setFooter(`© Ninja Bot`);
  modlog.send(banEmbed);
 
let dmEmbed = new Discord.RichEmbed()
  .setColor(0xFF0000)
    .setTimestamp()
    .setTitle("You have been banned :shrug:")
    .setDescription(`Uh-Oh you were just banned :thinking:!! But you can see the reason below`)
    .addField(`Banned From Server`, `${message.channel.guild}`)
    .addField(`Banned By`, `<@${message.author.id}>#${message.author.discriminator}`)
    .addField(`Reason For Ban`, reason)
    .setFooter(`© Ninja Bot`);
  member.user.send(dmEmbed);
 
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['info', 'ab'],
    permLevel: 0
  };
  
exports.help = {
    name: 'ban',
    description: 'Ban a member',
    usage: 'nb/ban @User#1234 {reason}',
    permissions: 'Administrator',
    group: 'Admin Module'
  };
