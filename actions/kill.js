module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://media.discordapp.net/attachments/818378060046008330/818379349777580042/f.gif",
        "https://media.discordapp.net/attachments/818378060046008330/818379367742308412/s.gif",
        "https://media.discordapp.net/attachments/818378060046008330/818379370523131904/d.gif",
        "https://media.discordapp.net/attachments/818378060046008330/818379374297612308/n.gif",
        "https://media.discordapp.net/attachments/818378060046008330/818379374305869875/x.gif",
        "https://media.discordapp.net/attachments/818378060046008330/818379374465253376/l.gif",
        "https://media.discordapp.net/attachments/818378060046008330/818379381839757322/k.gif",
        "https://media.discordapp.net/attachments/818378060046008330/818379389472997377/a.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle('wow they really did you like that..')
        .setDescription( `<@${user1.id}> **Killed <@${user.id}> oop**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}