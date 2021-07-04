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
            "https://media.discordapp.net/attachments/825524801816100884/825524824138317844/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825524935689764894/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825524971799183410/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825525059040444416/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825525111800070145/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825525736513077299/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825525787851096074/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825526092588122192/image0.gif?width=300&height=523",
            "https://media.discordapp.net/attachments/825524801816100884/825526154986389514/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825526676539834408/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825526794299899911/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825526899240599622/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825527115285659668/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825527161942179870/image0.gif?width=349&height=523",
            "https://media.discordapp.net/attachments/825524801816100884/825527378536824883/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825527470899200010/image0.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825528779245617192/tenor.gif",
            "https://media.discordapp.net/attachments/825524801816100884/825528781800341534/tenor_1.gif"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setTitle('Lesbian')
            .setImage(randomMessage)

            return message.channel.send(embed);   
    }
}