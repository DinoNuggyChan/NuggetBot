const superagent = require('superagent');
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        const animals = [
            "bird",
            "bunny",
            "cat",
            "dog",
            "fox",
            "kangaroo",
            "koala",
            "panda",
            "redpanda",
            "whale"
        ];

        const animal = animals[Math.floor(Math.random() * animals.length)];
        const {body} = await superagent
        .get(`https://api.animality.xyz/img/${animal}`);

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`a random ${animal}`)
        .setImage(body.link)
        .setTimestamp()

        return message.channel.send(embed);
    }
}