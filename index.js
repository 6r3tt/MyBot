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
  console.log('MyBot is online!!!\n')
  console.log('====================================')
  console.log('            Verbose Output')
  console.log('====================================\n')
});


// Leave commented out for debugging.

//client.on('message', message => {
//  console.log(message.content)
//});

// Repeating logic
//bot.on('message', (message) => {
//  if (message.author.id !== bot.user.id && message.content){
//    message.channel.send(message.content);
//  }
//});


// Woah I have to try this.
bot.on("message", function (msg) {
  // if message begins with "ping"
  for (var i = 0; i < 999999; i++) {
    if (msg.content.indexOf("/ping") === i || msg.content.indexOf("/Ping") === i) {
      var pong = "pong!:poop:\n";
      //pong += "pong!:poop:\n";
      msg.channel.send(pong);
      // alert the console
      console.log("Pinged: " + msg.author.username + "Pong#: " + i);
    }
  }



  var mybot_msg = "I am sorry I can't fix stupid\n"
                 +"I can smack you in the face!";
  for (var i = 0; i < 999999; i++) {
    // If someone refrences me I will remark.
    if (msg.author.id !== bot.user.id && msg.content.indexOf("/MyBot") === i) {
      msg.channel.send(mybot_msg);
      // console output.
      console.log("[*] MyBot Index: " + i);
    }

    if (msg.author.id !== bot.user.id && msg.content.indexOf("/MyBot") === i) {
      msg.channel.send(mybot_msg);
      // console output.
      console.log("[*] MyBot Index: " + i);
    }

    if (msg.author.id !== bot.user.id && msg.content.indexOf("/woah") === i || msg.content.indexOf("/Woah") === i) {
      msg.channel.send("What are you going to cry???");
      // console output.
      console.log("[!] User: " + msg.author.username + " is going to cry. " + "Index: " + i);
    }

    if (msg.author.id !== bot.user.id && msg.content.indexOf("/puppy") === i || msg.content.indexOf("/Puppy") === i) {
      msg.channel.send("So your brothers knew all about that bro!");
      // console output.
      console.log("[!] User: " + msg.author.username + " is talking about a puppy. " + "Index: " + i);
    }
  }


/*
  if (msg.author.username == "dahop") {
    var dahop_message = "Shut it dahop\n"
                        + ":laughing:";

    msg.channel.send(dahop_message);
  }

  if (msg.author.username == "zeropopulation") {
    var zeropopulation_msg = "Do you like long walks on the beach?\n"
                            +"I really don't.....\n"
                            +"I just wanted to get that clear!"
                            +"I am sorry hun."
                            +"Don't be mad!"
                            +":laughing:";
    msg.channel.send(zeropopulation_msg);
  }

  if (msg.author.username == "lil spicycle") {
    var lil_spicycle_msg = "Oh yeah baby ;)\n"
                          +"Talk dirty to me!\n"
                          +"Say My name my lil spicycle ;)\n"
                          +":laughing:";
    msg.channel.send(lil_spicycle_msg);
  }*/
});

client.login(config.token);
bot.login(config.token);
