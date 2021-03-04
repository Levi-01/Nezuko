const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/767617857046708224/788001996539166720/172.gif","https://cdn.discordapp.com/attachments/767617857046708224/788002016940785684/a_8eb77e42c7eeab09495c8917455498af.gif","https://cdn.discordapp.com/attachments/767617857046708224/788002035663634432/a_d427921f732eab571d7331fe7e27a4ff.gif","https://cdn.discordapp.com/attachments/767617857046708224/788002043662172190/39c851e9deccbc554ba3b3c0bb8b2259-2.gif","https://cdn.discordapp.com/attachments/767617857046708224/788002055871528971/a_c5015bf65fe28ae3afc45fea39577340.gif","https://cdn.discordapp.com/attachments/767617857046708224/788002483145801738/Arda449.gif","https://cdn.discordapp.com/attachments/767617857046708224/788002496101613578/a_beb460c2a9d5bc957672a694f95f68b2.gif","https://cdn.discordapp.com/attachments/767617857046708224/788002524228485120/a_cbf5d952bea7a20a6504f6b34eacb577.gif","https://cdn.discordapp.com/attachments/767617857046708224/788002522723385374/a_6cd3b3ac07b7e95c7dd57dd0ee969260.gif","https://cdn.discordapp.com/attachments/767617857046708224/788002538229465093/download.gif","https://cdn.discordapp.com/attachments/767617857046708224/788003133342351370/Elaine177-1.gif","https://cdn.discordapp.com/attachments/767617857046708224/788003154712592384/pqueen-pqueen-dance.gif","https://cdn.discordapp.com/attachments/767617857046708224/788003156796768276/pqueen-pqueenn.gif","https://cdn.discordapp.com/attachments/767617857046708224/788003163306721310/pqueen-mugemin.gif","https://cdn.discordapp.com/attachments/767617857046708224/788003175080525904/pqueen-dance.gif","https://cdn.discordapp.com/attachments/767617857046708224/788003590844317706/pqueen-1.gif","https://cdn.discordapp.com/attachments/767617857046708224/788003628949962752/a_004ab6fb379a6c347533309ee93de398.gif","https://cdn.discordapp.com/attachments/767617857046708224/788003637850931228/womangif117.gif","https://cdn.discordapp.com/attachments/767617857046708224/788003649150255104/tenor.gif","https://cdn.discordapp.com/attachments/767617857046708224/788003655843971122/4dh5ny.gif","https://cdn.discordapp.com/attachments/777158121226502164/787756584221671454/tenor.gif","https://cdn.discordapp.com/attachments/777158121226502164/787756549308809226/a_4fba27eab8e21dc3a8346f25e5c4f6bb.gif","https://cdn.discordapp.com/attachments/777158121226502164/787756520824766474/1534198784_7eb20b62-da5d-4006-a9da-4d0d2670cc11.gif","https://cdn.discordapp.com/attachments/777158121226502164/787415669158313984/7f2194f7-fe27-49d0-a271-edd8ac175570.gif","https://cdn.discordapp.com/attachments/777158121226502164/787222501469192192/tenor.gif","https://cdn.discordapp.com/attachments/777158121226502164/787140421833850880/yuyJXoqIvvoF.gif","https://cdn.discordapp.com/attachments/777158121226502164/787140421833850880/yuyJXoqIvvoF.gif","https://cdn.discordapp.com/attachments/777158121226502164/786897479177338890/ezgif-7-858bfde4a8c6-1.gif","https://cdn.discordapp.com/attachments/777158121226502164/786848247549001748/Arda274.gif","https://cdn.discordapp.com/attachments/777158121226502164/786596099153723442/RewardingTeemingJackal-max-1mb.gif","https://cdn.discordapp.com/attachments/777158121226502164/786596100562747402/image0-1-1-1-1.gif","https://cdn.discordapp.com/attachments/777158121226502164/786595743288655872/kendinegif1.gif","https://cdn.discordapp.com/attachments/777158121226502164/786595685666390036/tenor.gif","https://cdn.discordapp.com/attachments/777158121226502164/785587789990592580/a_a71e30764e83edd591db28e69c66b361.gif","https://cdn.discordapp.com/attachments/777158121226502164/785423279786557460/aaa.gif","https://cdn.discordapp.com/attachments/777158121226502164/785221954667544616/a_8b49a53acfe364d055d137121bfc7f69.gif","https://cdn.discordapp.com/attachments/777158121226502164/784782659456466944/mihrez_3.gif","https://cdn.discordapp.com/attachments/777158121226502164/784782616242552912/mihrez_8.gif","https://cdn.discordapp.com/attachments/777158121226502164/784008918061809684/7.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

    
.setColor("RANDOM")

.setTimestamp()

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['smokegif','smoke','gifsmoke'],

  permLevel: 0

};

exports.help = {

  name: 'smoke',

  description: 'lrowsxrd',

  usage: 'smoke'

};
