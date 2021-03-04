const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/608711494279888952/788287903800754207/New_Project_90_38D33D8.gif","https://cdn.discordapp.com/attachments/608711494279888952/788283300854497280/PandaHatunngifs.gif","https://cdn.discordapp.com/attachments/608711494279888952/788283087196258304/e39c25b1a0a05596ec0958b58ecb4c07.gif","https://cdn.discordapp.com/attachments/608711494279888952/788282987649171476/pandaHatunozel.gif","https://cdn.discordapp.com/attachments/608711494279888952/788282914407317534/PandaHatunOzeel.gif","https://cdn.discordapp.com/attachments/608711494279888952/788282882417491989/55d328cb7bf74f0058d7a9935ccce95a.gif","https://cdn.discordapp.com/attachments/608711494279888952/788282808895406100/ssaddas.gif","https://cdn.discordapp.com/attachments/608711494279888952/788282699005427712/PandaHatun.gif","https://cdn.discordapp.com/attachments/608711494279888952/788282510631108628/46b7194fcf769604-harley-and-joker-gif-tumblr.gif","https://cdn.discordapp.com/attachments/608711494279888952/788282408263745556/tenor_2.gif","https://cdn.discordapp.com/attachments/608711494279888952/788282405911003147/0c990980b2da7acdbed4f7426fcb49d3.gif","https://cdn.discordapp.com/attachments/608711494279888952/788004771332227072/tenor21.gif","https://cdn.discordapp.com/attachments/608711494279888952/788004770962866186/tenor22.gif","https://cdn.discordapp.com/attachments/608711494279888952/788004770723528745/tenor23.gif","https://cdn.discordapp.com/attachments/608711494279888952/788004696907317268/tenor24.gif","https://cdn.discordapp.com/attachments/608711494279888952/788004696362188830/tenor26.gif","https://cdn.discordapp.com/attachments/608711494279888952/788004187056635914/tenor27.gif","https://cdn.discordapp.com/attachments/608711494279888952/788004186800914442/tenor28.gif","https://cdn.discordapp.com/attachments/608711494279888952/788002173736583179/tenor30.gif","https://cdn.discordapp.com/attachments/608711494279888952/788001964738215956/tenor33.gif","https://cdn.discordapp.com/attachments/608711494279888952/788001964323110932/tenor34.gif","https://cdn.discordapp.com/attachments/608711494279888952/787987661805453312/tenor1.gif","https://cdn.discordapp.com/attachments/608711494279888952/787987631866511410/tenor0.gif","https://cdn.discordapp.com/attachments/608711494279888952/787987614258954240/tenor.gif","https://cdn.discordapp.com/attachments/608711494279888952/787677155374923796/Untitled_Project.gif","https://cdn.discordapp.com/attachments/608711494279888952/787661576357806100/a_7133108e65f5d5c8ba2cddb42eadd1b9.gif","https://cdn.discordapp.com/attachments/608711494279888952/787239559787839519/0c1c1e2f577b6fabf350480d87e072b4.gif","https://cdn.discordapp.com/attachments/608711494279888952/786625964724715550/a_e70dc72245a7b6024fe52e9dedc654fc.gif","https://cdn.discordapp.com/attachments/608711494279888952/786603888991141918/1_62.gif","https://cdn.discordapp.com/attachments/608711494279888952/786603828572979200/1_58.gif","https://cdn.discordapp.com/attachments/608711494279888952/786603820498550815/1_57.gif","https://cdn.discordapp.com/attachments/608711494279888952/786603752600895548/1_48.gif","https://cdn.discordapp.com/attachments/608711494279888952/786603723093704704/1_50.gif","https://cdn.discordapp.com/attachments/608711494279888952/786603705872941106/1_49.gif","https://cdn.discordapp.com/attachments/608711494279888952/786558028157681664/Rshf7b.gif","https://cdn.discordapp.com/attachments/700292105615966262/788126525131587634/ecf9cb8eacec1b4ee968c12987ce816d.gif","https://cdn.discordapp.com/attachments/700292105615966262/788052652567167037/tumblr_ph6bu4e1t31w40qvyo1_400.gif","https://cdn.discordapp.com/attachments/700292105615966262/787998287398567956/tenor_3.gif","https://cdn.discordapp.com/attachments/700292105615966262/787995533255114772/1cbd8675c1cbe1b0159f555af03eedb0.gif","https://cdn.discordapp.com/attachments/700292105615966262/787941747941441536/129.gif","https://cdn.discordapp.com/attachments/700292105615966262/787941741177077760/rbn.gif","https://cdn.discordapp.com/attachments/700292105615966262/787941603368501288/152.gif","https://cdn.discordapp.com/attachments/700292105615966262/787941565409787904/150.gif","https://cdn.discordapp.com/attachments/700292105615966262/787941200245948416/47.gif","https://cdn.discordapp.com/attachments/700292105615966262/787940585058205706/102.gif","https://cdn.discordapp.com/attachments/700292105615966262/787940372982661201/128.gif","https://cdn.discordapp.com/attachments/700292105615966262/787940331643076629/130.gif","https://cdn.discordapp.com/attachments/700292105615966262/787940338219221013/158.gif","https://cdn.discordapp.com/attachments/700292105615966262/787940194740469780/113.gif","https://cdn.discordapp.com/attachments/700292105615966262/787823353980911676/hrr.gif","https://cdn.discordapp.com/attachments/700292105615966262/787633671313555466/giphy_4.gif","https://cdn.discordapp.com/attachments/700292105615966262/787633641563750420/image0.gif","https://cdn.discordapp.com/attachments/700292105615966262/787459650198831154/1107259843bbe9c9f87f2ca23d1bc1b2.gif","https://cdn.discordapp.com/attachments/700292105615966262/787459585568014347/53e5275ffbb3a3a8a0ceff8c906c7a99.gif","https://cdn.discordapp.com/attachments/700292105615966262/787459454885953566/e952ff1248e3bb6c89036a87a6c4d554.gif","https://cdn.discordapp.com/attachments/700292105615966262/787459340926713916/36d95caf3a6c2dec66c56dc818c64dc2.gif","https://cdn.discordapp.com/attachments/700292105615966262/787459233339015198/a5cad13adbe459cd29cca4ff2d47bf31.gif","https://cdn.discordapp.com/attachments/700292105615966262/787424321031110706/10.gif","https://cdn.discordapp.com/attachments/700292105615966262/787424233227681792/4c8a34ecf6af1895.gif","https://cdn.discordapp.com/attachments/700292105615966262/787415537859690536/c91c797a30a568f3b552cdb89145beb1.gif","https://cdn.discordapp.com/attachments/700292105615966262/787415537587716126/39d9bd7a0d1c6fd4f98fb6be6602b72b.gif","https://cdn.discordapp.com/attachments/700292105615966262/787415469530546196/e95fd25d0880ce044099b89a089b24fa.gif","https://cdn.discordapp.com/attachments/700292105615966262/787415331303063572/87e5efecfd2daf16365366a886f11c54.gif","https://cdn.discordapp.com/attachments/700292105615966262/787415245673070672/a8d6c3fba1ab4d5ec49be4cd8946cea6.gif","https://cdn.discordapp.com/attachments/700292105615966262/787415080403730463/66f30f9880caaf5957db60727ad3563f.gif","https://cdn.discordapp.com/attachments/700292105615966262/787414820944871464/a5ca5caf459b2febc36d060012efa67f.gif","https://cdn.discordapp.com/attachments/700292105615966262/787243519651348490/giphy.gif"];

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

  aliases: ['movie','gif-movies','movies','moviesgif'],

  permLevel: 0

};

exports.help = {

  name: 'movie',

  description: 'lrowsxrd',

  usage: 'movie'

};
