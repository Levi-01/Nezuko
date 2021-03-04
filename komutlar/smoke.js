const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/767617857046708224/787990024556642334/sigara.gif","https://cdn.discordapp.com/attachments/767617857046708224/787990042249396264/a_443839a3424be13e77a723b857cecba1.gif","https://cdn.discordapp.com/attachments/767617857046708224/787990056782397440/10.gif","https://cdn.discordapp.com/attachments/767617857046708224/787990071408066560/legion_gif_212.gif","https://cdn.discordapp.com/attachments/767617857046708224/787990076843229184/a_77e57a3202345b49b9d4b6daaf9a0e47.gif","https://cdn.discordapp.com/attachments/767617857046708224/787990607833333760/a_33b3970b43fcca3522c9fa0536cb03d0.gif","https://cdn.discordapp.com/attachments/767617857046708224/787990620965961728/Erkek_51.gif","https://cdn.discordapp.com/attachments/767617857046708224/787990634149052416/a_6a3855f6a4e208dd86e3dd9667c095ef.gif","https://cdn.discordapp.com/attachments/767617857046708224/787990644961312768/986599.gif","https://cdn.discordapp.com/attachments/767617857046708224/787990656294846464/a_1e9e07d045baf10242e887cfc24c3138.gif","https://cdn.discordapp.com/attachments/767617857046708224/787991192163581962/18-01-59-a_ee5bb57b0bd14813db09668d37353590.gif","https://cdn.discordapp.com/attachments/767617857046708224/787991213419528233/26.gif","https://cdn.discordapp.com/attachments/767617857046708224/787991222978871296/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif","https://cdn.discordapp.com/attachments/767617857046708224/787991226586628096/kz_cok_iyi.gif","https://cdn.discordapp.com/attachments/767617857046708224/787991236568809512/Arda707.gif","https://cdn.discordapp.com/attachments/767617857046708224/787991682929917953/sb1.gif","https://cdn.discordapp.com/attachments/767617857046708224/787991684536729640/Arda680.gif","https://cdn.discordapp.com/attachments/767617857046708224/787991688068726784/Arda742.gif","https://cdn.discordapp.com/attachments/767617857046708224/787991720666071050/236.gif","https://cdn.discordapp.com/attachments/767617857046708224/787991722768203786/image0-25.gif","https://cdn.discordapp.com/attachments/755893014915711047/788114219265556520/a_3b201f9ea9d493ba3dbae2bb0ab10506.gif","https://cdn.discordapp.com/attachments/755893014915711047/786574576221683742/jayris16.gif","https://cdn.discordapp.com/attachments/755893014915711047/788252673828716564/MUHAMMED_YT_21.gif","https://cdn.discordapp.com/attachments/755893014915711047/788252673828716564/MUHAMMED_YT_21.gif","https://cdn.discordapp.com/attachments/755893014915711047/788114293320581130/oxytyche_55.gif","https://cdn.discordapp.com/attachments/755893014915711047/788114261033091082/UFFFF.gif","https://cdn.discordapp.com/attachments/755893014915711047/788114219265556520/a_3b201f9ea9d493ba3dbae2bb0ab10506.gif","https://cdn.discordapp.com/attachments/755893014915711047/788113439734104114/411.gif","https://cdn.discordapp.com/attachments/755893014915711047/788112861616275486/rexsin_21.gif","https://cdn.discordapp.com/attachments/755893014915711047/788104954233094144/213.gif","https://cdn.discordapp.com/attachments/755893014915711047/788044222195957790/metogif31.gif","https://cdn.discordapp.com/attachments/755893014915711047/788043041667022868/20-1-3-1.gif","https://cdn.discordapp.com/attachments/755893530429489192/788162978842148864/a_ebf458ae806c7646b08d74354fb9b395.gif","https://cdn.discordapp.com/attachments/755893530429489192/788162998950428723/hhm_1.gif","https://cdn.discordapp.com/attachments/755893530429489192/788163007871844362/a_d1d2baa5803155fc338ac4bfe5a347ac.gif","https://cdn.discordapp.com/attachments/755893530429489192/788163019934400532/image0.gif","https://cdn.discordapp.com/attachments/755893530429489192/788163032115052564/image0_77.gif","https://cdn.discordapp.com/attachments/755893530429489192/788283874542878720/wraithgif_84.gif","https://cdn.discordapp.com/attachments/755893530429489192/788284133423448105/a_46bafa936b6c911d6334b4924145886b.gif","https://cdn.discordapp.com/attachments/755893530429489192/788284206333558794/1552542279_5b524b58998817396f816e13968a5cfb2aabfa16_hq.gif","https://cdn.discordapp.com/attachments/755893530429489192/788284248272011284/a_9392534ecdb902064a68f7b444922e16.gif","https://cdn.discordapp.com/attachments/755893530429489192/788284471748853801/image0-2.gif","https://cdn.discordapp.com/attachments/755893530429489192/787410337900527636/e9fcc01a19745a1371bb7145a8a05f30.gif","https://cdn.discordapp.com/attachments/755893530429489192/787134320740663296/Laurie80.gif","https://cdn.discordapp.com/attachments/755893530429489192/786930442389028864/image0.gif","https://cdn.discordapp.com/attachments/755893530429489192/786930388895268875/image0.gif","https://cdn.discordapp.com/attachments/755893530429489192/786930041816350740/image0.gif","https://cdn.discordapp.com/attachments/755893530429489192/786929816808980490/image0.gif","https://cdn.discordapp.com/attachments/755893530429489192/786688624141271140/image0.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

    
.setColor("RANDOM")

.setImage(replies[result]);



message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-smoke','smoke-gif','gifsmoke','smokegif'],

  permLevel: 0

};

exports.help = {

  name: 'smoke',

  description: 'matador',

  usage: 'smoke'

};
