const translate = require('@iamtraction/google-translate');

module.exports= {
    name: 'emoji',
    async execute(client, message, args, command, Discord){
        var usermessage = args.toString().replace(/,/g, ' ');
        //я трахнул спин
        translate(`${usermessage}`, { to: 'en' }).then(res => {
            const user = message.author;

         const embed = new Discord.MessageEmbed()
	     .setColor('#FFE082')
	     .addFields(
		      { name: 'Message', value: `${usermessage}` },
          { name: 'Translates to', value: `${res.text}` },
         )
         message.channel.send(`${user}`,embed)

            //(res.text); // OUTPUT: You are amazing!

          }).catch(err => {

            return message.channel.send('Please  Enter Text to Translate to English (example: n.translate Привет)');
          });
    }
}