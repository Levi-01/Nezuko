const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/772439349056634890/772674201189351454/image0.gif","https://media.discordapp.net/attachments/772439349056634890/773378510282293258/image0.gif","https://media.discordapp.net/attachments/772439349056634890/773378542406860840/image0.gif","https://media.discordapp.net/attachments/772439349056634890/775112769250525204/image0.gif","https://media.discordapp.net/attachments/762954136744099842/762954422950559754/45a3f5e5-be26-42bd-bbe3-14e13d2a82b3.gif","https://media.discordapp.net/attachments/762954136744099842/762954482249891840/20200916_232700-1.gif","https://media.discordapp.net/attachments/762954136744099842/762954554828128256/20201001_121913.gif","https://media.discordapp.net/attachments/762954136744099842/762955252164591640/750391726157463782.gif","https://media.discordapp.net/attachments/762954136744099842/762955353444319281/757342653192077334.gif","https://media.discordapp.net/attachments/762954136744099842/762955516611264512/AetherTik5.gif","https://media.discordapp.net/attachments/762954136744099842/762955660303794197/ezgif-4-7aeb2f759554-1.gif","https://media.discordapp.net/attachments/762954136744099842/762956405678276618/ezgif.com-gif-maker_28.gif","https://media.discordapp.net/attachments/762954136744099842/762956414096244736/ezgif.com-gif-maker_30.gif","https://media.discordapp.net/attachments/762954136744099842/762956397595852820/20200923_205228.gif","https://media.discordapp.net/attachments/762954136744099842/762956491689951232/757381031513817088.gif","https://media.discordapp.net/attachments/762954136744099842/762958551936663562/761153746189025311.gif","https://media.discordapp.net/attachments/762954136744099842/762958560581255178/645897763225337868.gif","https://media.discordapp.net/attachments/762954136744099842/762958668202639360/752546039889657866.gif","https://media.discordapp.net/attachments/762954136744099842/762958685218668584/752546086123733053.gif","https://media.discordapp.net/attachments/762954136744099842/762958603841568778/752545961997238362.gif","https://media.discordapp.net/attachments/762954136744099842/762958593791361034/754369836297224202.gif","https://media.discordapp.net/attachments/762954136744099842/764951189333999656/654296564956790805.gif","https://media.discordapp.net/attachments/762954136744099842/764951693086425088/AyrmaCubugu_rainboww.gif","https://media.discordapp.net/attachments/762954136744099842/764951674858635318/AyrmaCubugu_Degisik.gif","https://media.discordapp.net/attachments/762954136744099842/764951840147767296/sari.gif","https://media.discordapp.net/attachments/762954136744099842/764951914466246746/757687241370763294.gif","https://media.discordapp.net/attachments/762954136744099842/773246637094338600/ayarlar.gif","https://media.discordapp.net/attachments/762954136744099842/773247090473697281/kayan_ok.gif","https://media.discordapp.net/attachments/742032808880373922/742033319444611072/image4.gif","https://media.discordapp.net/attachments/742032808880373922/742032974412775434/image1.gif","https://media.discordapp.net/attachments/742032808880373922/742032977013375046/image3.gif","https://media.discordapp.net/attachments/742032808880373922/742032977411833958/image4.gif","https://media.discordapp.net/attachments/742032808880373922/742036599831003206/image5.gif","https://media.discordapp.net/attachments/759405037452525578/774798491444314112/image0.gif","https://media.discordapp.net/attachments/762954136744099842/774222729909633084/neon_kedi.gif","https://media.discordapp.net/attachments/762954136744099842/774276378680885268/sar_tik.gif","https://media.discordapp.net/attachments/762954136744099842/764953571154198558/7.gif","https://media.discordapp.net/attachments/762954136744099842/764951914466246746/757687241370763294.gif","https://media.discordapp.net/attachments/762954136744099842/773183537356210186/Ates_Gif.gif","https://media.discordapp.net/attachments/762954136744099842/773184274446417940/Onaylamak_Gif.gif","https://media.discordapp.net/attachments/762954136744099842/773184374668787742/Reddetmek_Gif.gif","https://media.discordapp.net/attachments/762954136744099842/773184386194866276/Say_Gif.gif","https://media.discordapp.net/attachments/762954136744099842/773184477773561866/Zil_Gif.gif","https://media.discordapp.net/attachments/762954136744099842/773184488620556288/Yuklenme_Gif.gif","https://media.discordapp.net/attachments/762954136744099842/773245943130619984/discord_ortaklg.gif","https://media.discordapp.net/attachments/762954136744099842/773245954928541706/conbot.gif","https://media.discordapp.net/attachments/762954136744099842/773246020683300894/duvarn_arkasindaki_katil.gif","https://media.discordapp.net/attachments/762954136744099842/773246134638346240/meow_kalp.gif","https://media.discordapp.net/attachments/762954136744099842/773246397503373382/sayac.gif","https://media.discordapp.net/attachments/762954136744099842/773246548938588170/neon_love.gif","https://media.discordapp.net/attachments/762954136744099842/773246637094338600/ayarlar.gif","https://media.discordapp.net/attachments/762954136744099842/773246741922709534/dikkat.gif","https://media.discordapp.net/attachments/762954136744099842/773246897816731718/neon_no.gif","https://media.discordapp.net/attachments/762954136744099842/773247043762126868/rengarenk_ban.gif","https://media.discordapp.net/attachments/762954136744099842/773539308200001606/kalp_platin.gif","https://media.discordapp.net/attachments/762954136744099842/773538840757403648/discord_yukleniyor.gif","https://media.discordapp.net/attachments/762954136744099842/773539398993444974/yesil_dikkat.gif","https://media.discordapp.net/attachments/762954136744099842/773539778435612693/neon_wtf.gif","https://media.discordapp.net/attachments/762954136744099842/774222462078287883/neon_partner.gif","https://media.discordapp.net/attachments/762954136744099842/774223518689919026/4_renkli_nokta.gif","https://images-ext-1.discordapp.net/external/t45fj1JBPBgoI1BPAGyvAMsnV3wJqzQKtp-LPqDqKSg/https/cdn.discordapp.com/avatars/728662741145092146/a_012798995a6b8f76d1c158f53f9d13e1.gif","https://media.discordapp.net/attachments/772439349056634890/772654554915405834/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772476265147531284/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772470728380383322/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772470723389161472/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772467185716428800/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772465123864477716/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772464415139692554/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772462263108894760/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772460782461780008/image0.gif","https://images-ext-2.discordapp.net/external/hFguaYyUXqrqmTNMY1goa3AmE2Xy-7ZSlQi58-AfOpY/https/cdn.discordapp.com/emojis/663653468262760449.gif","https://media.discordapp.net/attachments/699521406425366549/772136511650398238/680248657655889937.gif","https://media.discordapp.net/attachments/699521406425366549/772136515396435998/743178214297567252.gif","https://media.discordapp.net/attachments/699520919328129055/772136222880694292/689796934038323209.gif","https://media.discordapp.net/attachments/699520919328129055/772136313461276692/663013770234298369.gif","https://media.discordapp.net/attachments/699520919328129055/772136316988948541/732661077086568500.gif","https://media.discordapp.net/attachments/699520919328129055/772136324148232213/747488535799529683.gif","https://media.discordapp.net/attachments/699520919328129055/772136322869362728/746355924096122900.gif","https://media.discordapp.net/attachments/772439349056634890/772458540304302130/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772458337879064576/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772457783601135656/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772457917407559730/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772458041429196810/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772457609490857994/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772457444672667688/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772457161183330334/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772457073605607444/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772456815920807936/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772456632868667402/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772456494394245130/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772456273551556608/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772440367924510741/image0.gif","https://media.discordapp.net/attachments/772439349056634890/772441523475316736/image0.gif","https://media.discordapp.net/attachments/762954136744099842/762954675636011008/707347244591874061.gif","https://media.discordapp.net/attachments/762954136744099842/762954565825462282/448250904643108865.gif","https://media.discordapp.net/attachments/762954136744099842/762954449927798784/84ec596.gif","https://media.discordapp.net/attachments/762954136744099842/762955115438669835/734149231626944614.gif","https://media.discordapp.net/attachments/762954136744099842/762955762582421504/koyukrmz.tac1.gif","https://media.discordapp.net/attachments/762954136744099842/762955832978833418/pembe.tac1.gif","https://media.discordapp.net/attachments/762954136744099842/762955929736970250/siyah.tac1.gif","https://media.discordapp.net/attachments/762954136744099842/764951138432581643/727078862151745606.gif","https://media.discordapp.net/attachments/762954136744099842/764951147432902707/AetherSonsuz4.gif","https://media.discordapp.net/attachments/762954136744099842/764951155381108768/AetherSonsuz3.gif","https://media.discordapp.net/attachments/762954136744099842/764951398655721472/AetherTikMavi.gif","https://media.discordapp.net/attachments/762954136744099842/764951463154679838/693211301769642027.gif","https://media.discordapp.net/attachments/762954136744099842/764951412442136616/685836879274442759.gif","https://media.discordapp.net/attachments/762954136744099842/764951452292218950/AetherTikSiyah.gif","https://media.discordapp.net/attachments/762954136744099842/764951860477427752/mor.gif","https://media.discordapp.net/attachments/762954136744099842/764952150911746088/753184636410134656.gif","https://media.discordapp.net/attachments/762954136744099842/764952174714159124/ezgif.com-gif-maker_32.gif","https://media.discordapp.net/attachments/762954136744099842/764952196474601472/717430475391762492.gif","https://media.discordapp.net/attachments/762954136744099842/764952361890086932/748319885637058611.gif","https://media.discordapp.net/attachments/762954136744099842/764953550157119539/AetherTik19-1.gif","https://media.discordapp.net/attachments/762954136744099842/764954159115403304/743786487581245460.gif","https://media.discordapp.net/attachments/772439349056634890/772439620990402580/image0.gif"]
let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()


.setColor("RANDOM")


.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['emoji','Emojis','emojis','Emoji'],

  permLevel: 0

};

exports.help = {

  name: 'emojis',

  description: 'lrowsxrd',

  usage: 'emojis'

};
