const { Client, Collection, MessageEmbed,MessageAttachment } = require('discord.js');
const fs = require('fs');
const http = require('http');
const express = require('express');
const ayarlar = require('./ayarlar.json');
const { prefix } = require('./ayarlar.json');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
  

client.user.setActivity(`${ prefix }help`, { type:"PLAYING" })
  console.log()
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};
//sug

client.on('message', function(message) {
let args = message.content.split(" ").slice('').join(" ");
if(message.author.bot)return;
const sugch = message.channel.id === "828306775433281546"
if (!sugch) return false;
if(message.content.startsWith('')){
  message.delete()
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setImage("https://cdn.discordapp.com/attachments/790471993317130250/803575439221850162/suggestions.png")
.setColor("RANDOM")
.setThumbnail(message.author.avatarURL())
.setDescription(`${args}`)
.setFooter(`Suggestion by | ${message.author.id}`)
.setTimestamp()
message.channel.send(embed).then(msg => {
  msg.react('812100042667196416').then( r => {
    msg.react('812099853974503495')
  })
})
}
});
//perm

client.yetkiler = message => {
  if(!message.guild) {
	return; }
  let permlvl = -ayarlar.varsayilanperm  ;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if(message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if(message.author.id === message.guild.ownerID) permlvl = 6;
  if(message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};

//log

client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("818550684957278258");
  let embed = new MessageEmbed().setColor("RANDOM")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `**Joined This Server!**`)
  .addField("**Server Name:**",  ${guild.name} )
  .addField("**Server Owner:**",  `${guild.owner}` )
  .addField("**Server Id:**",  `${guild.id}` )
  .addField("**Member Count:**",  `${guild.memberCount}` )
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

client.on("guildDelete", guild => {
  client.channels.cache.get("828805021441196102")
    .send(`Left Server| 🔻
Server name: ${guild.name}
Server id: ${guild.id}
Server Count: ${guild.memberCount}`);
});

client.login(ayarlar.token)
