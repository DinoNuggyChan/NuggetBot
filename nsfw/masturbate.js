module.exports = {
    name: '.',
    aliases: ['finger'],
    description: ".",
    async execute(client, message, args, command, Discord) {
        if (message.channel.nsfw) {

        } else {
            return message.channel.send("This channel is SFW.");
        }

        const messages = [
            "https://cdn.discordapp.com/attachments/821684228017750048/821684579865329734/image0.gif",
            "https://cdn.discordapp.com/attachments/821684228017750048/821684750636154930/image0.gif",
            "https://cdn.discordapp.com/attachments/821684228017750048/821684817049419806/image0.gif",
            "https://cdn.discordapp.com/attachments/821684228017750048/821684878541848626/image0.gif",
            "https://cdn.discordapp.com/attachments/821684228017750048/821685063929823303/image0.gif",
            "https://cdn.discordapp.com/attachments/821684228017750048/821685183622676480/image0.gif",
            "https://cdn.discordapp.com/attachments/821684228017750048/821685555158974484/image0.gif"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user1 = message.author;
        
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('')
            .setDescription( `<@${user1.id}> **is masturbating**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}