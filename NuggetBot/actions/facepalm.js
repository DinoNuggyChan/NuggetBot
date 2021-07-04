module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
            "https://media.discordapp.net/attachments/839960921542492181/839961997395361812/image0.gif",
            "https://media.discordapp.net/attachments/839960921542492181/839962925556039720/image0.gif",
            "https://media.discordapp.net/attachments/839960921542492181/839963163968667648/image0.gif",
            "https://media.discordapp.net/attachments/839960921542492181/839963825872437310/tenor_2.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const user1 = message.author;

    //const user2 = message.mentions.users.first()
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setDescription( `<@${user1.id}> **is facepalming**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}