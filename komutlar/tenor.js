
const fetch = require('node-fetch');
const { tenorAPI } = require('TW6LBHJR1ZWL');
const Discord = require("discord.js");

exports.run = async (Bastion, message, args) => {

  constructor(client) {
    super(client, {
      name: 'gif',
      group: 'gifs',
      aliases: ['search', 'search-gifs'],
      memberName: 'gif',
      description: 'Provide a query and I will return a gif!',
      throttling: {
        usages: 1,
        duration: 4
      },
      args: [
        {
          key: 'text',
          prompt: 'What gif would you like to watch?',
          type: 'string',
          validate: text => text.length < 50
        }
      ]
    });
  }

  run(message, { text }) {
    fetch(`https://api.tenor.com/v1/random?key=${tenorAPI}&q=${text}&limit=1`)
      .then(res => res.json())
      .then(json => message.say(json.results[0].url))
      .catch(e => {
        message.say('Failed to find a gif that matched your query');
        // console.error(e);
        return;
      });
  }
};
