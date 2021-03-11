
const Discord = require("discord.js");
const snekfetch = require('snekfetch')
exports.run = async (client, message, args) => {
try {
			const { body, headers } = await snekfetch
				.get('http://thecatapi.com/api/images/get')
				.query({ api_key: 'APIKEY' });
			const format = headers['content-type'].replace(/image\//i, '');
			return message.channel.send({ files: [{ attachment: body, name: `cat.${format}` }] });
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['cats'],

  permLevel: 0

};

exports.help = {

  name: 'neon',

  description: 'lrowsxrd',

  usage: 'neon'

};
