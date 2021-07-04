module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        const messages = [
            "https://media.discordapp.net/attachments/826239942250332170/826239975837794354/image0.gif",
            "https://cdn.discordapp.com/attachments/826239942250332170/826240050094014534/image0.gif",
            "https://cdn.discordapp.com/attachments/826239942250332170/826240101389565962/image0.gif",
            "https://cdn.discordapp.com/attachments/826239942250332170/826240328041365514/image0.gif",
            "https://cdn.discordapp.com/attachments/826239942250332170/826240398111539240/image0.gif",
            "https://cdn.discordapp.com/attachments/826239942250332170/826240610783461376/image0.gif",
            "https://i.imgur.com/3RkqKC2.gif",
            "https://i.imgur.com/DLNQX2k.gif",
            "https://i.imgur.com/0sZNwFF.gif",
            "https://i.imgur.com/PPJGaSG.gif",
            "https://i.imgur.com/l4mAoa7.gif",
            "https://i.imgur.com/O2qeDXk.gif",
            "https://i.imgur.com/6dPGB6t.gif",
            "https://i.imgur.com/gbrJwQD.gif",
            "https://i.imgur.com/R4a2kdp.gif",
            "https://i.imgur.com/K4u0blz.gif",
            "https://i.imgur.com/psHxfqP.gif",
            "https://i.imgur.com/YR225IK.gif",
            "https://i.imgur.com/YR225IK.gif",
            "https://i.imgur.com/inFDa6p.gif",
            "https://cdn.discordapp.com/attachments/826239942250332170/826240857317310464/image0.gif",
            "https://cdn.discordapp.com/attachments/826239942250332170/826240986946207764/image0.gif",
            "https://cdn.discordapp.com/attachments/826239942250332170/826241129602088970/image0.gif",
            "https://cdn.discordapp.com/attachments/826239942250332170/826241288252555264/image0.gif",
            "https://cdn.discordapp.com/attachments/826239942250332170/826241427456786503/image0.gif"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user1 = message.author;
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setTitle('')
            .setDescription( `<@${user1.id}> **is pouting**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}