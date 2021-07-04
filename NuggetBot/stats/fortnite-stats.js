const fetch = require('node-fetch');
module.exports = {
   name: '.',
   aliases: ['fn-stats'],
   description: ".",
   async execute(client, message, args, command, Discord) {

        var username = args.toString().replace(/,/g, ' ');

        let res;
        try {
           res = await fetch(`https://fortnite-api.com/v1/stats/br/v2?name=${username}`, {
              method: "GET"
           });
           res = await res.json();
        } catch(e) {
           return message.channel.send(`An error has occured: ${e}`);
        }

        if(!username) { 
           return message.channel.send('Please enter a username');
        } else if (res.status === 403) {
           return message.channel.send('The requested account\'s stats are not public');
        } else if (res.status === 404) {
           return message.channel.send('The requested account does not exist');
        } else {
           return message.channel.send([
              `Here are the stats for ${username}`,
              ``,
              `https://fortnite-api.com/v1/stats/br/v2?name=${username}`
           ]);
        }
    }
}