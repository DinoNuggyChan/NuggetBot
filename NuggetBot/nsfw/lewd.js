module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
         if (message.channel.nsfw) {

        } else {
            return message.channel.send("This channel is SFW.");
        }

        const messages = [
            "https://cdn.discordapp.com/attachments/821684218215137310/821686249735323658/image0.gif",
            "https://cdn.discordapp.com/attachments/821684218215137310/821686397470769152/image0.gif",
            "https://cdn.weeb.sh/images/HJODp6dw-.gif",
            "https://cdn.weeb.sh/images/SkY4ppOwW.gif",
            "https://cdn.discordapp.com/attachments/821684218215137310/821686518933356565/image0.gif",
            "https://cdn.weeb.sh/images/H1JrfnPLM.gif",
            "https://cdn.weeb.sh/images/B1_I6pOD-.gif",
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user1 = message.author;

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('')
            .setDescription( `<@${user1.id}> **is making a lewd face**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}