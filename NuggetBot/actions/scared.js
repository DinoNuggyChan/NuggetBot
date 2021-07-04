module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        const messages = [
            "https://cdn.discordapp.com/attachments/826241701970575371/826242376338636800/image0.gif",
            "https://cdn.discordapp.com/attachments/826241701970575371/826242464661766164/image0.gif",
            "https://cdn.discordapp.com/attachments/826241701970575371/826242638181040128/image0.gif",
            "https://cdn.discordapp.com/attachments/826241701970575371/826242672963354644/image0.gif",
            "https://cdn.discordapp.com/attachments/826241701970575371/826242723958358017/image0.gif",
            "https://cdn.discordapp.com/attachments/826241701970575371/826242969430392872/image0.gif",
            "https://cdn.discordapp.com/attachments/826241701970575371/826243232132366336/image0.gif",
            "https://cdn.discordapp.com/attachments/826241701970575371/826243482129530920/image0.gif",
            "https://cdn.discordapp.com/attachments/826241701970575371/826243694679162880/image0.gif",
            "https://cdn.discordapp.com/attachments/826241701970575371/826243883825889350/image0.gif"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user1 = message.author;
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setTitle('😨')
            .setDescription( `<@${user1.id}> **is scared**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}