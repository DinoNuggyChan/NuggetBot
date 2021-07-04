const Discord = require('discord.js');
const client = new Discord.Client();
const { topgg1, token } = require('../config.json');
const config = require("../config.json");
const DBL1 = require('dblapi.js');
const dbl1 = new DBL1(topgg1, { webhookPort: 4000, webhookAuth: '' });

dbl1.webhook.on('ready', hook => {
   console.log(`Webhook up and running at http://${hook.hostname}:${hook.port}${hook.path} (Cat Bot Webhook)`);
});
dbl1.on('error', e => {
   console.log(`Oops! ${e}`);
});

dbl1.webhook.on('vote', async (vote, message) => {
  let testserver = client.channels.cache.get('828148248131665941');
  let oh = client.channels.cache.get('820851306595352597');

   console.log(vote)

   const userID = vote.user;
   const votedfor = `<@${vote.bot}>` ;
   let type = `bot`;
   const id = vote.bot ;

        const embed = new Discord.MessageEmbed()
            .setColor('#FFE082')
            .setTitle('New UpVote')
            .setDescription( `<@${userID}> Just Voted For ${votedfor}`)
            .addField(`Website`, `[Top.gg](https://top.gg/${type}/${id}/vote)`)

   if(testserver) await testserver.send(embed)
   .then(
      testserver.send(`<@${userID}> Thank you for the vote`)
     );

   if(oh) await oh.send(embed)
   .then(
      oh.send(`<@${userID}> Thank you for the vote`)
      );
      const reminder = new Discord.MessageEmbed()
      .setColor('#FFE082')
      .setTitle('New UpVote')
      .setDescription( `Hey, <@${userID}>`)
      .addField(`You can vote again`, `[Click here](https://top.gg/bot/810614472607137803/vote)`)
      
       if (client.message.channel.id == '820851306595352597')
       if (message.content.includes(`${userID}`)){ 
      
      setTimeout(function(){
      client.users.cache.get(`${userID}`).send(reminder)
      }, 3000);
      }
});
/*
client.on('message', message => {

   const reminder = new Discord.MessageEmbed()
   .setColor('#FFE082')
   .setTitle('New UpVote')
   .setDescription( `Hey, <@${userID}>`)
   .addField(`You can vote again`, `[Click here](https://top.gg/bot/810614472607137803/vote)`)
   
    if (message.channel.id == '820851306595352597')
    if (message.content.includes(`${userID}`)){ 
   
   setTimeout(function(){
   client.users.cache.get(`${userID}`).send(reminder)
   }, 3000);
   }
});
*/
client.login(token);