const randomanime = require("random-anime");
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        if (message.channel.nsfw) {

        } else {
            return message.channel.send("This channel is SFW.");
        }

        const lo = new Discord.MessageEmbed()
        .setDescription(`Searching...`)
        .setTimestamp()
        message.channel.send(lo).then(m => {
            const anime = randomanime.nsfw();

            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')

            .setTitle(`${message.author.tag} here's a random anime image`)

            .setImage(anime)

            m.edit(embed);
        });
    }
}