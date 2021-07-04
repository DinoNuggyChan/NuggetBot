
module.exports = {
    name: '',
    description: "Sends a Random  Gif Mention a user",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://cdn.discordapp.com/attachments/821688852351549455/821688966351683595/m.gif",
        "https://cdn.discordapp.com/attachments/821688852351549455/821688966679101500/n.gif",
        "https://cdn.discordapp.com/attachments/821688852351549455/821688967002849290/s.gif",
        "https://cdn.weeb.sh/images/SkY4ppOwW.gif",
        "https://cdn.discordapp.com/attachments/821688852351549455/821688967257653248/z.gif",
        "https://cdn.discordapp.com/attachments/821688852351549455/821688967555711006/a.gif",
        "https://cdn.discordapp.com/attachments/821688852351549455/821688967815626779/b.gif",
        "https://cdn.discordapp.com/attachments/821688852351549455/821688968130068500/d.gif",
        "https://cdn.discordapp.com/attachments/821688852351549455/821688968457879553/f.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user1 = message.author;

    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setDescription( `<@${user1.id}> **is Blushing**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}