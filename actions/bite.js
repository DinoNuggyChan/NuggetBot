module.exports = {
    name: '.',
    aliases: ['nom'],
    description: "Sends a Random  Gif Mention a user",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://media.discordapp.net/attachments/822407595872092190/822430328986927134/d.gif",
        "https://cdn.discordapp.com/attachments/822407595872092190/822430335102222346/g.gif",
        "https://cdn.discordapp.com/attachments/822407595872092190/822430337560084481/f.gif",
        "https://cdn.discordapp.com/attachments/822407595872092190/822430342220218388/a.gif",
        "https://cdn.discordapp.com/attachments/822407595872092190/822430362793541642/s.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Nom')
        .setDescription( `<@${user1.id}> **is noming on <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}