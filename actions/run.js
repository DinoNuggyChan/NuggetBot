module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        const messages = [
            "https://cdn.discordapp.com/attachments/826245540797743114/826245567889539103/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826245691209940992/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826245753408061460/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826245779152437259/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826245911642112020/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826246514128846858/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826246543103361084/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826246576896212992/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826246746975502356/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826246818488647720/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826246905486770186/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826247333804638208/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826247402825973770/image0.gif",
            "https://cdn.discordapp.com/attachments/826245540797743114/826247457385087007/image0.gif"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user1 = message.author;
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setTitle('')
            .setDescription( `<@${user1.id}> **is running**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}