const client = require('nekos.life');
const neko = new client();
module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {
        
        let poke = await neko.sfw.poke();
        
        const messages = [
            "https://media.discordapp.net/attachments/839959373408108604/839959561539420230/f_000132.gif",
            "https://media.discordapp.net/attachments/839959373408108604/839959564141330492/f_000137.gif",
            `${poke.url}`,
            "https://media.discordapp.net/attachments/839959373408108604/839959569370972160/Hk2HekKD-.gif",
            "https://media.discordapp.net/attachments/839959373408108604/839959573410480128/HkxwlkKPb.gif",
            `${poke.url}`,
            "https://media.discordapp.net/attachments/839959373408108604/839959573662007346/tenor-3_1.gif",
            "https://media.discordapp.net/attachments/839959373408108604/839959574776774716/rktSlkKvb.gif",
            `${poke.url}`,
            "https://media.discordapp.net/attachments/839959373408108604/839959589835505724/GlaringWellgroomedAiredale-size_restricted.gif",
            "https://media.discordapp.net/attachments/839959373408108604/839959602799181854/HyPyUymsb-1.gif",
            `${poke.url}`,
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const user1 = message.author;

    const user2 = message.mentions.users.first()
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setDescription( `<@${user1.id}> **is poking** <@${user2.id}>`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}