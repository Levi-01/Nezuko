 const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  
 if(!args[0])return message.channel.send(`Please specify the person you want to remove.`)
        let User = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if(!User)return message.channel.send(`This is not a user on the server! Please specify a valid user.`)
        let sebep = args.slice(1).join(" ")
        if(!sebep) return message.channel.send(`Please give me a reason! You can t throw someone away for no reason, can you?`)
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`To use this command \`Ban Members\` you must have the authority.`);
        message.guild.members.ban(User, { reason: sebep });
        const Embed = new MessageEmbed()
        .setTitle(`You Fired a User!`)
        .setDescription(`${client.users.cache.get(User.id).username} Fired!`)
        .setColor(`RANDOM`)
        message.channel.send(Embed)
        
    }


exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: [],
    permLevel: 3,
}

exports.help = {
    name: 'ban',
    description: 'ban komutu',
    usage: 'ban'
} 
