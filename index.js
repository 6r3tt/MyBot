// Discord called from discord.js
// Require files:
const Discord = require('discord.js');
// Remember to point to the correct location.
const config = require('./.ignore/config.json');


// Testing repeating bot
const Commando = require('discord.js-commando');
const bot = new Commando.Client();


// Create a client object with Discord.
const client = new Discord.Client();

// Ready check. Ready Up!
client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', message => {
  console.log(message.content)
})

// Repeating logic
bot.on('message', (message) => {
  if (message.author.id !== bot.user.id && message.content){
    message.channel.sendMessage(message.content);
  }
})

// Broken Login.
client.login(config.token);
