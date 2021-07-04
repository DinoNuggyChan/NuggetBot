module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
            "https://media.discordapp.net/attachments/839741095973748737/839741242467549194/tenor-3_2.gif",
            "https://media.discordapp.net/attachments/839741095973748737/839741244590784512/20200821_201956.gif",
            "https://media.discordapp.net/attachments/839741095973748737/839741245537779732/ReimuSip.gif",
            "https://media.discordapp.net/attachments/839741095973748737/839741252747657216/37a71f05da153c75a571a9946fb5e5e788415335r1-450-297_00.gif",
            "https://media.discordapp.net/attachments/839741095973748737/839741255859961896/image0-6.gif",
            "https://media.discordapp.net/attachments/839741095973748737/839741258247307295/image0-7.gif",
            "https://media.discordapp.net/attachments/839741095973748737/839741258809606154/EP.13.720p_2.gif",
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user1 = message.author;
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setDescription( `<@${user1.id}> **is eating**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}