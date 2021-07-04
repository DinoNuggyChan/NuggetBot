const randomanime = require("random-anime");
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {

        const lo = new Discord.MessageEmbed()
        .setDescription(`Searching...`)
        .setTimestamp()
        message.channel.send(lo).then(m => {
            const anime = randomanime.anime();

            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag} here's a random anime image`)
            .setImage(anime)

            return m.edit(embed);
        })
    }
}