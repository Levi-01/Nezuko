const Discord = require("discord.js");

exports.run = async(client, message , args) => {

        if (!message.member.permissions.has("MANAGE_EMOJIS")) return message.channel.send("You don't have MANAGE_EMOJIS permission!");
        if (!message.guild.me.permissions.has("MANAGE_EMOJIS")) return message.channel.send("I need MANAGE_EMOJIS permission!");

        if (!args.length) return message.channel.send(" | Please specify some emojis!");

        for (const rawEmoji of args) {
            const parsedEmoji = Discord.Util.parseEmoji(rawEmoji);
            if (parsedEmoji.id == null) return message.channel.send("Please enter a valid emoji!");

            if (parsedEmoji.id) {
                try {
                    const extension = parsedEmoji.animated ? '.gif' : '.png';
                    const url = [`https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`];
                    message.guild.emojis.create(url, parsedEmoji.name).catch((e) => {
                        message.channel.send(`<:HBminus:783351288515657728> | ${e}`);
                        return;
                    })
                        .then((emoji) => message.channel.send(`**Added**\n\${emoji.url}\``)).catch(() => {})
                } catch (err) {
                    message.channel.send("The server reached the maximum number of Emojis. Therefore I cannot add more emojis.")
                }
            }
        }

    }
exports.conf = {
 aliases: ['addemoji','addemojis'],
 permLevel: 0,
 kategori: 'Sunucu'
};

exports.help = {
 name: 'addemoji',
 description: '',
 usage: 'addemoji'
};
