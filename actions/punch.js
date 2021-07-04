module.exports = {
    name: '.',
    aliases: ['hit'],
    description: ".",
    async execute(client, message, args, command, Discord) {
        const messages = [
        "https://cdn.discordapp.com/attachments/819089945196625942/819090465529397258/k.gif",
        "https://cdn.discordapp.com/attachments/819089945196625942/819090468469211156/d.gif",
        "https://cdn.discordapp.com/attachments/819089945196625942/819090471225131028/a.gif",
        "https://cdn.discordapp.com/attachments/819089945196625942/819090475311038494/g.gif",
        "https://cdn.discordapp.com/attachments/819089945196625942/819090479374925854/f.gif",
        "https://cdn.discordapp.com/attachments/819089945196625942/819090480046014464/h.gif",
        "https://cdn.discordapp.com/attachments/819089945196625942/819090497024032848/j.gif",
        "https://cdn.discordapp.com/attachments/819089945196625942/819090511209693244/l.gif",
        "https://cdn.discordapp.com/attachments/819089945196625942/819090513370152960/s.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle( `ouch`)
        .setDescription(`<@${user1.id}> **Punched <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}