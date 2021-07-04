module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://cdn.discordapp.com/attachments/819094338582609930/819097461896380416/k.gif",
        "https://media.discordapp.net/attachments/819094338582609930/819097468805316618/g.gif",
        "https://cdn.discordapp.com/attachments/819094338582609930/819097469748379688/a.gif",
        "https://cdn.discordapp.com/attachments/819094338582609930/819097471765970944/h.gif",
        "https://cdn.discordapp.com/attachments/819094338582609930/819097472118554624/s.gif",
        "https://cdn.discordapp.com/attachments/819094338582609930/819097473461125150/d.gif",
        "https://cdn.discordapp.com/attachments/819094338582609930/819097474554921001/f.gif",
        "https://cdn.discordapp.com/attachments/819094338582609930/819097475985965066/j.gif"
        ]

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle( `that must if hurt`)
        .setDescription(`<@${user1.id}> **kicked <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}