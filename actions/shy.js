module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        const messages = [
            "https://cdn.discordapp.com/attachments/826247001917358081/826247795227885578/image0.gif",
            "https://cdn.discordapp.com/attachments/826247001917358081/826247892124696576/image0.gif",
            "https://cdn.discordapp.com/attachments/826247001917358081/826247922433130526/image0.gif",
            "https://cdn.discordapp.com/attachments/826247001917358081/826247951482355752/image0.gif",
            "https://cdn.discordapp.com/attachments/826247001917358081/826248143880060928/image0.gif",
            "https://cdn.discordapp.com/attachments/826247001917358081/826248250570965024/image0.gif",
            "https://cdn.discordapp.com/attachments/826247001917358081/826248487862927380/image0.gif",
            "https://cdn.discordapp.com/attachments/826247001917358081/826248578431057920/image0.gif",
            "https://cdn.discordapp.com/attachments/826247001917358081/826248663298080788/image0.gif",
            "https://cdn.discordapp.com/attachments/826247001917358081/826249122990129153/image0.gif",
            "https://cdn.discordapp.com/attachments/826247001917358081/826249261648707614/image0.gif"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user1 = message.author;
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setTitle('')
            .setDescription( `<@${user1.id}> **is being shy**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}