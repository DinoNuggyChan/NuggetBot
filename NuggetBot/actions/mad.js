module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://cdn.discordapp.com/attachments/819681555932774451/819681737247686706/d.gif",
        "https://cdn.discordapp.com/attachments/819681555932774451/819681738154049577/a.gif",
        "https://cdn.discordapp.com/attachments/819681555932774451/819681738694328380/s.gif",
        "https://cdn.discordapp.com/attachments/819681555932774451/819681740502597672/f.gif",
        "https://cdn.discordapp.com/attachments/819681555932774451/819681741278019614/g.gif",
        "https://cdn.discordapp.com/attachments/819681555932774451/819681744071688272/j.gif",
        "https://cdn.discordapp.com/attachments/819681555932774451/819681743925149697/h.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.author;
    const embed = new Discord.MessageEmbed()

        .setColor('RANDOM')
        .setTitle('Mad')
        .setDescription( `<@${user.id}> **is Mad**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}