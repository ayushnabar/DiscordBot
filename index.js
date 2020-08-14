const Discord = require('discord.js');
const bot = new Discord.Client();

const token = ' ';

const PREFIX = "!";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', message=>{
   let args = message.content.substring(PREFIX.length).split(" ");
   var num = getRandomInt(3);
   if (message.author.bot) return;
   switch(num){
        case 0:
            message.channel.send(message.author.username + ' is tilted');
            break;
        case 1:
            message.channel.send(message.author.username + ' is malding');
            break;
        case 2:
            message.channel.send(message.author.username + ' is uninstalling');
            break;
        default:
            message.channel.send('Yeahyuh');
    }

})

bot.login(token);


