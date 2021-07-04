module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://media.discordapp.net/attachments/818381324346982412/818381346321072178/d.gif",
        "https://media.discordapp.net/attachments/818381324346982412/818381353526755329/j.gif",
        "https://media.discordapp.net/attachments/818381324346982412/818381353719693352/g.gif",
        "https://cdn.discordapp.com/attachments/818381324346982412/818381353874620426/v.gif",
        "https://cdn.discordapp.com/attachments/818381324346982412/818381354068344872/c.gif",
        "https://cdn.discordapp.com/attachments/818381324346982412/818381354135584828/f.gif",
        "https://cdn.discordapp.com/attachments/818381324346982412/818381411031580712/lp.gif",
        "https://cdn.discordapp.com/attachments/818381324346982412/818381436242624513/a.gif",
        "https://cdn.discordapp.com/attachments/818381324346982412/818381437878665226/s.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle('High Fives')
        .setDescription( `<@${user1.id}> **High Fives <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}