    const Discord = require('discord.js');

    module.exports = {
        name: "unban",
        description: "unbans a member from the server",
        
    
        async run (client, message, args) {
    
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
            if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the permissions.')
    
            const member = message.mentions.members.first();
    
            if(!args[0]) return message.channel.send('Please specify a user');
    
    
    
            
    
            let reason = args.slice(1).join(" ");
    
            if(!reason) reason = 'Unspecified';
    
            message.guild.members.unban(`${member}`, `${reason}`)
            .catch(err => {
                if(err) return message.channel.send('Something went wrong')
            })
    
            const banembed = new Discord.MessageEmbed()
            .setTitle('Member Unbanned')
            .addField('User Unbanned', member)
            .addField('Unbanned by', message.author)
            .addField('Reason', reason)
            .setFooter('Time Unbanned', client.user.displayAvatarURL())
            .setTimestamp()
    
            message.channel.send(banembed);
    
    
        }
    }
