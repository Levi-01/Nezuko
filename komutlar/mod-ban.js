        //send the confirmation message, add a react and ban the user
        if (args.length >= 2){
        message.guild.member(banneduser).ban()
        .then(message.channel.send("Shade \`Success`\ - User banned successfully.")
        .then(message=>message.react('✅')));
        //builds the embed for the log channelOh
        const embed = new Discord.RichEmbed()
          .setColor(message.guild.member(client.user).highestRole.color)
          .setTimestamp(message.createdAt)
          .addField("User Banned: ", banneduser, true)
          .addField("Banned By: ", message.author.username, true)
          .addField("Reason: ", reason, true)
          .setFooter("Automated Mod Logging");
          //sends the embed

          const config = require ("../config.json")
          const logchannel = message.guild.channels.get(config[guild.id].modlogchannelID)
          if(!logchannel || logchannel === "null"){
            logchannel = message.guild.channels.get(config[guild.id].logchannelID)
          }
          logchannel.send(`**Infraction for: **${message.mentions.users.first()}`, {embed}).catch(console.log)

        }else{
          message.reply("Shade \`Error`\ - You must add a reason!")
          .then(message=>message.react('❎'));
      }
    }
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban"],
  permLevel: 0
};

exports.help = {
  name: "ban",
  description: "baned",
  usage: "[name | nickname | mention | ID] <reason> (optional)"
};
