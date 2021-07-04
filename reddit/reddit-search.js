const randomPuppy = require("random-puppy");;
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        var argt = args.toString().replace(/,/g, '+');
        
        const lo = new Discord.MessageEmbed()
        .setDescription(`Searching...`)
        .setTimestamp()

        const subReddits = [`${argt}`];
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
}