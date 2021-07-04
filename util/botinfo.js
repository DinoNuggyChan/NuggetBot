var os = require('os');
const osu = require('node-os-utils');
const cpu = osu.cpu
var os 	= require('os-utils');
var mem = osu.mem

module.exports = {
  name: '.',
  aliases: [],
  description: ".",
  async execute(client, message, args, command, Discord) {

    if(message.author.id === "411704274599542794" || message.author.id === "681276518051348509" || message.author.id === "308440976723148800" || message.author.id === "427103309199835138" || message.author.id === "826127445592768602" || message.author.id === "712797947699527711"){
  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);

  let uptime = `${days}D : ${hours}hrs : ${minutes}mins : ${seconds}secs`;

  var ping = Date.now() - message.createdTimestamp

     var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();

     var  getpercentage = 
    ((usedMemory/totalMemory) * 100).toFixed(2) + '%'

    cpu.usage()
    .then(cpuPercentage => {

      cpu.free()
      .then(info => {

        mem.info()
        .then(ram => {

    const embed = new Discord.MessageEmbed()
        .setTitle(`${client.user.tag} INFO`)
        .setColor(3447003)
        .addField('Bot INFO Below', '\u200B' )
        .addField("Server Count", `${client.guilds.cache.size +1} Servers`, true)
        .addField("Total Member Count", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users`, true)
        .addField("Bot Latency", `${ping}ms`, true)
        .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
        .addField('System INFO Below', '\u200B' )
        .addField("Total Ram in MB", `${ram.totalMemMb}mb`, true)
        .addField("Ram used in MB", `${ram.usedMemMb}mb`, true)
        .addField("Free Ram in MB", `${ram.freeMemMb}mb`, true)
        .addField('\u200B', '\u200B' )
        .addField("Average CPU usage", `${cpuPercentage}%`, true)
        .addField("Free CPU", `${info}%`, true)
        .addField('\u200B', '\u200B' )
        .addField("Uptime", `${uptime}`)



        .setTimestamp()

     return message.channel.send(embed);

    
  });
  });
  });
    }
  }
}