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
            "https://media.discordapp.net/attachments/825516285035151400/825516350549262386/image0.gif",
            "https://media.discordapp.net/attachments/825516285035151400/825516442706247700/image0.gif?width=829&height=467",
            "https://media.discordapp.net/attachments/825516285035151400/825516789932883968/image0.gif",
            "https://media.discordapp.net/attachments/825516285035151400/825516904206565406/image0.gif?width=829&height=431",
            "https://media.discordapp.net/attachments/825516285035151400/825516904206565406/image0.gif?width=829&height=431",
            "https://media.discordapp.net/attachments/825516285035151400/825517023865602088/image0.gif",
            "https://media.discordapp.net/attachments/825516285035151400/825517235312263168/image0.gif?width=363&height=524",
            "https://media.discordapp.net/attachments/825516285035151400/825517641056780308/image0.gif",
            "https://media.discordapp.net/attachments/825516285035151400/825528089848971284/image0.gif",
            "https://media.discordapp.net/attachments/825516285035151400/825528565637840906/image0.gif",
            "https://media.discordapp.net/attachments/825516285035151400/825528786443304980/image0.gif",
            "https://media.discordapp.net/attachments/825516285035151400/825529025706721280/image0.gif"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user1 = message.mentions.users.first();
        const user = message.author;

        if(!user1) {
            return message.reply("Mention a user dummy!");
        }

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(``)
            .setDescription(`<@${user.id}> & <@${user1.id}> are having lesbian sex`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}