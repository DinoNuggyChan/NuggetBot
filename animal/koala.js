const superagent = require('superagent');
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {


        const messages = [
            "koala",
        ]
        const animal = messages[Math.floor(Math.random() * messages.length)];

     const {body} = await superagent
        .get(`https://api.animality.xyz/img/${animal}`);

     const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`a random ${animal}`)
    .setImage(body.link)
    .setTimestamp()

    message.channel.send(embed);
    }
}