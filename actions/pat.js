const client = require('nekos.life');
const neko = new client();
module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {
        let pat = await neko.sfw.pat();

        const messages = [
            "https://cdn.discordapp.com/attachments/821749614575222805/821750204340371517/l.gif",
            "https://cdn.discordapp.com/attachments/821749614575222805/821750217379545099/s.gif",
            `${pat.url}`,
            "https://cdn.discordapp.com/attachments/821749614575222805/821750217774727178/z.gif",
            "https://cdn.discordapp.com/attachments/821749614575222805/821750217975005254/bcb26bcf43bde113.gif",
            `${pat.url}`,
            "https://cdn.discordapp.com/attachments/821749614575222805/821750218265198662/a.gif",
            "https://cdn.discordapp.com/attachments/821749614575222805/821750218541891644/d.gif",
            `${pat.url}`,
            "https://cdn.discordapp.com/attachments/821749614575222805/821750219753652224/f.gif",
            "https://cdn.discordapp.com/attachments/821749614575222805/821750219892719686/g.gif",
            `${pat.url}`,
            "https://cdn.discordapp.com/attachments/821749614575222805/821750220093653013/h.gif",
            "https://cdn.discordapp.com/attachments/821749614575222805/821750220278464552/j.gif",
            `${pat.url}`,
            "https://cdn.discordapp.com/attachments/821749614575222805/821750220525797396/k.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}

    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setDescription( `<@${user1.id}> **is patting <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}