const Discord = require('discord.js');
const client = new Discord.Client();
const { topgg, token } = require('../config.json');
const DBL = require('dblapi.js');
const dbl = new DBL(topgg, { webhookPort: 8000, webhookAuth: '' });

dbl.webhook.on('ready', hook => {
   console.log(`Webhook up and running at http://${hook.hostname}:${hook.port}${hook.path} (Nugget Bot Webhook)`);
});

dbl.on('error', e => {
   console.log(`Oops! ${e}`);
});

dbl.webhook.on('vote', async (vote) => {
  let testserver = client.channels.cache.get('828148248131665941');

  let oh = client.channels.cache.get('820851306595352597');
   console.log(vote)

   const userID = vote.user;
   const votedfor = vote.guild ? `oh 2.0` : `<@${vote.bot}>` ;
   let type = vote.guild ? `servers` :  `bot`;
   const id = vote.bot || vote.guild ;

        const embed = new Discord.MessageEmbed()
            .setColor('#FFE082')
            .setTitle('New UpVote')
            .setDescription( `<@${userID}> Just Voted For ${votedfor}`)
            .addField(`Website`, `[Top.gg](https://top.gg/${type}/${id}/vote)`)


   // If the channel to send messages in exists, we send a message in it with the ID of the user who votes
   if(testserver) await testserver.send(embed)
     .then(
         testserver.send(`<@${userID}> Thank you for the vote`)
        );

   if(oh) await oh.send(embed) 
   .then(
      oh.send(`<@${userID}> Thank you for the vote`)
      );

});

client.login(token);