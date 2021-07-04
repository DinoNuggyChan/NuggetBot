module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        const messages = [
            "8==========D",
            "8====D",
            "8=====D",
            "8========D",
            "8=============D",
            "8D",
            "8===D",
            "8======D",
            "8=D",
            "8=====D",
            "8=======D"
        ];
        
        const size = messages[Math.floor(Math.random() * messages.length)];
        const user = message.mentions.members.first() || message.member

        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('pp size')
        .setDescription(`${user.user} pp size is ${size}`)

        return message.channel.send(embed);
    }
}