
module.exports = {
    name: '.',
    description: "Sends a Random  Gif Mention a user",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://media.discordapp.net/attachments/819348963387506781/819348997537660948/s.gif",
        "https://cdn.discordapp.com/attachments/819348963387506781/819349000577744926/a.gif",
        "https://cdn.discordapp.com/attachments/819348963387506781/819349005016367174/d.gif",
        "https://cdn.discordapp.com/attachments/819348963387506781/819349004953452594/f.gif",
        "https://cdn.discordapp.com/attachments/819348963387506781/819349006668660806/g.gif",
        "https://cdn.discordapp.com/attachments/819348963387506781/819349011437715556/j.gif",
        "https://cdn.discordapp.com/attachments/819348963387506781/819349014100705300/h.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('bonk')
        .setDescription( `<@${user1.id}> **Bonked <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}