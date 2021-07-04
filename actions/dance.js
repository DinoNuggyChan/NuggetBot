module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://cdn.weeb.sh/images/B1LUuImvZ.gif",
        "https://cdn.weeb.sh/images/H1yFOUmv-.gif",
        "https://cdn.weeb.sh/images/r1pUOL7vW.gif",
        "https://cdn.discordapp.com/attachments/819681577403416626/819703055473311774/a.gif",
        "https://cdn.discordapp.com/attachments/819681577403416626/819703057104371802/d.gif",
        "https://cdn.discordapp.com/attachments/819681577403416626/819703057360355348/f.gif",
        "https://cdn.discordapp.com/attachments/819681577403416626/819703071101288488/s.gif",
        "https://i.pinimg.com/originals/11/e9/03/11e9038965932e27306b6c8ef16bd574.gif",
        "https://i.pinimg.com/originals/b8/38/ed/b838ed9eead6ce4b448bc020883ec881.gif",
        "https://d2w9rnfcy7mm78.cloudfront.net/2145256/original_cd9c01187cead45cd791beafa78f7e08.gif?1525707539",
        "https://media3.giphy.com/media/mJIa7rg9VPEhzU1dyQ/200.gif",
        "https://i.pinimg.com/originals/69/53/22/695322e0b3edc81c6b2e0824962bb617.gif",
        "https://media.tenor.com/images/279bf22997edc0703cee75385645d7f8/tenor.gif",
        "https://data.whicdn.com/images/268736236/original.gif",
        "https://media.discordapp.net/attachments/843016407603347466/843017632650100756/ezgif.com-gif-maker_20.gif?width=340&height=604"
    ]

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.author;
    const embed = new Discord.MessageEmbed()

        .setColor('RANDOM')
        .setTitle('Got da Moves')
        .setDescription( `<@${user.id}> **is Dancing**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}