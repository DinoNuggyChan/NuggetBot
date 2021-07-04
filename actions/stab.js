module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        const messages = [
            "https://media.discordapp.net/attachments/784272708410015766/827272701122707493/image0.gif",
            "https://cdn.discordapp.com/attachments/784272708410015766/827272958514167808/image0.gif",
            "https://media.discordapp.net/attachments/784272708410015766/827273060922163250/image0.gif",
            "https://media.discordapp.net/attachments/784272708410015766/827273302715924500/image0.gif",
            "https://cdn.discordapp.com/attachments/784272708410015766/827273336379539466/image0.gif",
            "https://cdn.discordapp.com/attachments/784272708410015766/827273507653156874/image0.gif",
            "https://cdn.discordapp.com/attachments/784272708410015766/827273958574784572/image0.gif",
            "https://64.media.tumblr.com/tumblr_m02seq01Ov1qbvovho1_500.gif",
            "https://media.discordapp.net/attachments/784272708410015766/827274834278613042/image0.gif",
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user = message.mentions.users.first();
        const user1 = message.author;
        
        if(!user) {
            return message.reply("Mention a user dummy!");
        }
        
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('')
            .setDescription( `<@${user1.id}> **Stabbed <@${user.id}>. Well well**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}