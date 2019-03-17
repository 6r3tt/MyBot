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
  if (msg.content.indexOf("ping") === 0 || msg.content.indexOf("Ping") === 0) {
    // send a message to the channel the ping message was sent in.
    //bot.sendMessage(msg.channel, "pong!");
    msg.channel.send("pong fuckers!");

    // alert the console
    console.log("FuckingPinged: " + msg.author.username);
  }






  var mybot_msg = "I am sorry I can't fix stupid\n"
                 +"I can smack you in the face!";
  for (var i = 0; i < 999999; i++) {
    // If someone refrences me I will remark.
    if (msg.author.id !== bot.user.id && msg.content.indexOf("MyBot") === i) {
      msg.channel.send(mybot_msg);
      console.log("[*] MyBot Index: " + i);
    } //else {
      // This one is broken currently. Still learning.
      //if (msg.author.id !== bot.user.id && msg.content.indexOf("@MyBot#0329") === i) {
        //msg.channel.send(mybot_msg);
        //console.log("[*] @MyBot#0329");
      //} else {
        // Call out the cry babys when they make it known.
        //if (msg.author.id !== bot.user.id && msg.content.indexOf("woah") === i || msg.content.indexOf("Woah") === i) {
          //msg.channel.send("What are you going to cry???");
          // console output.
          //console.log("[!] User: " + msg.author.username + " is going to cry. " + "Index: " + i);
        //} else {
          // Ping Pong. Where it all started. HelloWorld for Discord.js
          //if (msg.author.id !== bot.user.id && msg.content.indexOf("ping") === i || msg.content.indexOf("Ping") === i) {
            //bot.sendMessage(msg.channel, "pong!");
            //msg.channel.send("pong fuckers!");
            // console output.
            //console.log("FuckingPinged: " + msg.author.username + "Index: " + i);
          //} else {
            // Hi can get so annoying.
            //if (msg.author.id !== bot.user.id && msg.content.indexOf("Hi") === i || msg.content.indexOf("hi") === i) {
              //msg.channel.send("Say something better! Da fuck is da matta whitcha!!!")
              // console output
              //console.log("FuckingHi: " + msg.author.username + " Index: " + i);
            //}
          //}
        //}
      //}
    //}
  }





//if (msg.content.indexOf("MyBot") === 0) {
//    msg.channel.send(mybot_msg);
//    console.log("[*] MyBot Index: 0")
  // for (var i = 0; i < msg.length; i++) {
  //  if (msg.content.includes(msg[i]) && msg.content == "MyBot") {
      // If the message contains the word MyBot
  //    var mybot_msg = "I am sorry I can't fix stupid\n"
  //                   +"I can smack you in the face!";
  //    msg.cannel.send(mybot_msg);
  //  }
  //}

  if (msg.author.username == "dahop") {
    var dahop_message = "Shut the fuck up dahop\n"
                        + "What do you want from me?";

    //msg.channel.send(dahop_message);
    //msg.channel.send("Oh yeah baby ;)\n");
    //msg.channel.send("Talk dirty to me!");
  }

  if (msg.author.username == "zeropopulation") {
    var zeropopulation_msg = "Do you like long walks on the beach?\n"
                            +"I really don't.....\n"
                            +"I just wanted to get that clear!";
    //msg.channel.send("Get the fuck back to work!!!");
    //msg.channel.send("Don't make me send this to your boss!!!");
    //msg.channel.send("I am sorry hun.");
    //msg.channel.send("Don't be mad!");
    msg.channel.send(zeropopulation_msg);
  }

  if (msg.author.username == "lil spicycle") {
    var lil_spicycle_msg = "Oh yeah baby ;)\n"
                          +"Talk dirty to me!\n"
                          +"Say My name my lil spicycle ;)\n"
                          +":laughing:";
    //msg.channel.send("Oh yeah baby ;)\n");
    //msg.channel.send("Talk dirty to me!");
    msg.channel.send(lil_spicycle_msg);
  }
});



// Broken Login.
client.login(config.token);
bot.login(config.token);
