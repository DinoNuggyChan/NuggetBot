module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        const messages = [
            "https://cdn.discordapp.com/attachments/831030123829919784/831030145829044244/3f791d7331c168c4130867987012dd65.gif",
            "https://cdn.discordapp.com/attachments/831030123829919784/831030150292439050/8e5c02f21edc3b9da43c03c1a918ef6a.gif",
            "https://cdn.discordapp.com/attachments/831030123829919784/831030152384217138/560ec540a039f99e68a6f68a2aba301225d30232_hq.gif",
            "https://cdn.discordapp.com/attachments/831030123829919784/831030162262196261/tenor_1.gif",
            "https://cdn.discordapp.com/attachments/831030123829919784/831030162262196261/tenor_1.gif",
            "https://cdn.discordapp.com/attachments/831030123829919784/831030169325142016/tumblr_ac714e798702e8c76dc7abb9effddd1b_51c40770_1280.gif",
            "https://cdn.discordapp.com/attachments/831030123829919784/831030163155320852/tenor.gif",
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user = message.mentions.users.first();
        const user1 = message.author;
        
        if(!user) {
            return message.reply("Mention a user dummy!");
        }
        
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Nuzzles')
            .setDescription( `<@${user1.id}> **nuzzles <@${user.id}>**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}