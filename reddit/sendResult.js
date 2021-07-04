const randomPuppy = require("random-puppy");

module.exports = async function sendResult(client, message, args, command, Discord, messages) {
    const randomreddit = messages[Math.floor(Math.random() * messages.length)];
    const lo = new Discord.MessageEmbed()
    .setDescription(`Searching...`)
    .setTimestamp()

    const subReddits = [`${randomreddit}`];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    message.channel.send(lo).then(m => {
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Found in r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);
        return m.edit(embed);
    });
}