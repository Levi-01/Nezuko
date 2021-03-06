 const Discord = require('discord.js');
//BLACK 
exports.run = (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have enough authority");
    let kullanici = args[0];
    if (!kullanici) return message.channel.send("You need to enter a user ID")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`This user is not banned.`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {
        message.channel.send(`${user.tag} the reason for the ban of the user named: **${reason}**`)

    })
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ban'],
    permLevel: 0
};

exports.help = {
    name: 'ban-sorgu',
    description: 'Ban sorgulama yaparsınız.',
    usage: 'ban-sorgu'
}; 
