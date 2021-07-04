const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        let slap = await neko.sfw.slap();

        const messages = [
        "https://media.discordapp.net/attachments/819422006520971294/819424062614667284/s.gif",
        "https://media.discordapp.net/attachments/819422006520971294/819424065281458256/d.gif",
        `${slap.url}`,     
        "https://cdn.discordapp.com/attachments/819422006520971294/819424075607703562/h.gif",
        "https://cdn.discordapp.com/attachments/819422006520971294/819424081468325928/j.gif",
        `${slap.url}`,
        "https://cdn.discordapp.com/attachments/819422006520971294/819424082638536724/g.gif",
        "https://cdn.discordapp.com/attachments/819422006520971294/819424082487541780/l.gif",
        `${slap.url}`,
        "https://cdn.discordapp.com/attachments/819422006520971294/819424085515829348/f.gif",
        "https://cdn.discordapp.com/attachments/819422006520971294/819424092876570624/a.gif",
        `${slap.url}`,
        "https://cdn.discordapp.com/attachments/819422006520971294/819424389351079956/p.gif",
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle('')
        .setDescription( `<@${user1.id}> **slapped <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}