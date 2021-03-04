const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/764247185180983306/773471057789059082/lethianeongif82.gif","https://media.discordapp.net/attachments/767332506101219348/770611544266113054/man_1.gif","https://media.discordapp.net/attachments/767332506101219348/770656449822457866/Internet_20201016_134706.gif","https://media.discordapp.net/attachments/767332506101219348/772187914003939328/a_5c0d5d16bb87de84e03f6311241e3266.gif","https://media.discordapp.net/attachments/767332506101219348/773611438756986931/ezgif.com-gif-maker.gif","https://media.discordapp.net/attachments/767332506101219348/773611567806939166/tenor.gif","https://media.discordapp.net/attachments/767332506101219348/773924789986787378/OV_YEAH.gif","https://media.discordapp.net/attachments/767332506101219348/773925075937918976/GIF24.gif","https://media.discordapp.net/attachments/767332506101219348/774114050057437204/a_d38e6a88eb9964816fb15cf9ce406cf6.gif","https://media.discordapp.net/attachments/767332506101219348/774114094667530280/red_adam.gif","https://media.discordapp.net/attachments/767332506101219348/774275554022916096/a_4f2d57440789fb4ae8db16198289078e.gif","https://media.discordapp.net/attachments/767332506101219348/774284095999442995/a_d31c936307fe122b421fc6f17033dfc4.gif","https://media.discordapp.net/attachments/764927608013193276/773386844531982347/image0.gif","https://media.discordapp.net/attachments/737803513052266622/769502947112386570/image1.gif","https://media.discordapp.net/attachments/746824654840135761/770685752106418236/a_8e7a3c1409116f658b8157e6bd9d3a12.gif","https://images-ext-2.discordapp.net/external/ZkJYSNBknZ8hGt598r3uZ0XLJ6L4Ihi0SJmXrakqmd8/https/cdn.discordapp.com/avatars/711179837204594789/a_64faec5386ba8e7841152bdc3a6dd937.gif","https://media.discordapp.net/attachments/764247185180983306/769236666401292339/Anime_1_Without_Wings.gif","https://media.discordapp.net/attachments/764247185180983306/769236777835036693/lethianeongif261.gif","https://media.discordapp.net/attachments/764247185180983306/769241211729870858/a_ce0c1b1f304411e78354fab85450f9e5.gif","https://media.discordapp.net/attachments/764247185180983306/769864662329327626/a_eb88b4cb615396c3a809d1487df64f82.gif","https://media.discordapp.net/attachments/764247185180983306/769896370269061120/lethianeongif311.gif","https://media.discordapp.net/attachments/764247185180983306/769897199756378132/lethianeongif258.gif","https://media.discordapp.net/attachments/764247185180983306/769898272542162984/lethianeongif220.gif","https://media.discordapp.net/attachments/764247185180983306/769898277838520340/lethianeongif211.gif","https://media.discordapp.net/attachments/764247185180983306/769899948455362570/lethianeongif174.gif","https://media.discordapp.net/attachments/764247185180983306/770149598379245578/image0-10.gif","https://media.discordapp.net/attachments/764247185180983306/770877206225747999/a_0e2f117a4c70417de1a346208807330f.gif","https://media.discordapp.net/attachments/764247185180983306/770149598379245578/image0-10.gif","https://media.discordapp.net/attachments/764247185180983306/770149616481075200/image0-9.gif","https://images-ext-1.discordapp.net/external/ItEBjoOFPmomNk2tV-dU46iWVo0WuseagilMeRSMT9Y/https/media.discordapp.net/attachments/764247185180983306/769237023776571392/a_c9036f71930cf8a68d00523661cdc2aa.gif","https://media.discordapp.net/attachments/764247185180983306/770877181802577920/a_f82ce6cfca3795b14d61a21ea922814b.gif","https://media.discordapp.net/attachments/764247185180983306/771018921087729664/jksyh47uy4.gif","https://media.discordapp.net/attachments/764927608013193276/766539387491450910/image0.gif","https://media.discordapp.net/attachments/764927608013193276/768134949387370568/image3.gif","https://media.discordapp.net/attachments/764927608013193276/768134949949669386/image5.gif","https://media.discordapp.net/attachments/764927608013193276/768164227377791066/image0.gif","https://media.discordapp.net/attachments/767332506101219348/769971518096277525/GIF16.gif","https://media.discordapp.net/attachments/767332506101219348/770025310292541490/a_83aa50c85b2c54c5870ba40faa1e8b32.gif","https://media.discordapp.net/attachments/764247185180983306/768801661741170718/ezgif-3-552ff569fa9b.gif","https://media.discordapp.net/attachments/764247185180983306/768801620719829002/a_f9ac755b23e1479fce5344dbcb75449c.gif","https://media.discordapp.net/attachments/764247185180983306/768803323314044948/lethianeongif313.gif","https://media.discordapp.net/attachments/764247185180983306/769127136673267762/lethianeongif2.gif","https://media.discordapp.net/attachments/764247185180983306/769127254159917066/lethianeongif102.gif","https://media.discordapp.net/attachments/764247185180983306/769829444512120852/a_091ec8d931725db8adeb7fa431ec2691.gif","https://media.discordapp.net/attachments/764247185180983306/769863991152738314/neon56.gif","https://media.discordapp.net/attachments/764247185180983306/769896253210492958/lethianeongif327.gif","https://media.discordapp.net/attachments/764247185180983306/769896513421180928/lethianeongif325.gif","https://media.discordapp.net/attachments/764247185180983306/769897243129020426/lethianeongif259.gif","https://media.discordapp.net/attachments/764247185180983306/769897759591366696/lethianeongif244.gif","https://media.discordapp.net/attachments/764247185180983306/769898080283394058/lethianeongif215.gif","https://media.discordapp.net/attachments/764247185180983306/769898105151684639/lethianeongif226.gif","https://media.discordapp.net/attachments/764247185180983306/769898174738726952/lethianeongif225.gif","https://media.discordapp.net/attachments/764247185180983306/769898224202285126/lethianeongif217.gif","https://media.discordapp.net/attachments/764247185180983306/769899162442661888/lethianeongif207.gif","https://media.discordapp.net/attachments/764247185180983306/769899731220168734/lethianeongif170.gif","https://media.discordapp.net/attachments/764247185180983306/769912734279794738/lethianeongif75.gif","https://media.discordapp.net/attachments/764247185180983306/770149246937989130/image0-12.gif","https://media.discordapp.net/attachments/764247185180983306/770149581215498280/image0-13.gif","https://media.discordapp.net/attachments/764247185180983306/770187879816757268/image0-2.gif","https://images-ext-2.discordapp.net/external/cLZzclAD2RLmDVT-j15WxWgKh2d2UC3t_rRUfPcE2-k/https/media.discordapp.net/attachments/764247185180983306/769509034070900756/a_d39c50d78103af7108d4337c5fefd552.gif","https://media.discordapp.net/attachments/746824661962063952/770689231483830312/a_d58f04fdc3c1bda8e1d717b784568614.gif","https://media.discordapp.net/attachments/746824661962063952/770693056068321361/a_50cdf5f3f6bd6470c90edbbc8ff44983.gif","https://media.discordapp.net/attachments/746824661962063952/770695576433328148/a_f5490352a49fd7125c214b4b85a483e0.gif","https://media.discordapp.net/attachments/764927608013193276/771073057594540043/image0.gif","https://media.discordapp.net/attachments/764927608013193276/771071634794086450/image0.gif"
];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

    
.setColor("BLACK")

.setTimestamp()

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Neon','neon','neongif'],

  permLevel: 0

};

exports.help = {

  name: 'neon',

  description: 'lrowsxrd',

  usage: 'neon'

};
