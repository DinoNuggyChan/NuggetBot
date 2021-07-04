const client = require('nekos.life');
const neko = new client();
module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {

        let kiss = await neko.sfw.kiss();

        const messages = [
        "https://media.discordapp.net/attachments/818377125736218644/818377641043427338/a.gif",
        "https://media.discordapp.net/attachments/818377125736218644/818377643242029056/k.gif",
        `${kiss.url}`,
        "https://media.discordapp.net/attachments/818377125736218644/818377645292912690/p.gif",
        "https://media.discordapp.net/attachments/818377125736218644/818377645959413771/g.gif",
        `${kiss.url}`,
        "https://media.discordapp.net/attachments/818377125736218644/818377647104852008/d.gif",
        "https://media.discordapp.net/attachments/818377125736218644/818377647591260160/s.gif",
        `${kiss.url}`,
        "https://i.imgur.com/qAKhdly.gif",
        "https://i.imgur.com/9mTsixC.gif",
        `${kiss.url}`,
        "https://i.imgur.com/UCCYFVv.gif",
        "https://i.imgur.com/kA3yYP3.gif",
        `${kiss.url}`,
        "https://i.imgur.com/oWN1Lyv.gif",
        "https://i.imgur.com/Sp4Rnnc.gif",
        `${kiss.url}`,
        "https://i.imgur.com/iLqFsxk.gif",
        "https://i.imgur.com/PSdAadM.gif",
        `${kiss.url}`,
        "https://i.imgur.com/IErvta1.gif",
        "https://i.imgur.com/JxFezIV.gif",
        `${kiss.url}`,
        "https://i.imgur.com/M4Z31Mg.gif",
        "https://i.imgur.com/XKg9TjH.gif",
        `${kiss.url}`,
        "https://i.imgur.com/v6FQFt2.gif",
        "https://i.imgur.com/rwYFIWX.gif",
        `${kiss.url}`,
        "https://i.imgur.com/qw4vIBF.gif",
        "https://i.imgur.com/VuNtgBs.gif",
        `${kiss.url}`,
        "https://i.imgur.com/XMJKmUr.gif",
        "https://i.imgur.com/IKtZibn.gif",
        `${kiss.url}`,
        "https://i.imgur.com/0kiouzr.gif",
        "https://i.imgur.com/vLYzEvq.gif",
        `${kiss.url}`,
        "https://i.imgur.com/YsfS7e6.gif",
        "https://i.imgur.com/ee7bNXC.gif",
        `${kiss.url}`,
        "https://i.imgur.com/GrSUkVv.gif",
        "https://i.imgur.com/5tGRBfg.gif",
        `${kiss.url}`,
        "https://i.imgur.com/SGGmcg2.gif",
        "https://i.imgur.com/jvTQ0IZ.gif",
        `${kiss.url}`,
        "https://i.imgur.com/sQ60Dg9.gif",
        "https://i.imgur.com/FQETIh1.gif",
        `${kiss.url}`,
        "https://i.imgur.com/tO88DE8.gif",
        "https://i.imgur.com/yf5Kri0.gif",
        `${kiss.url}`,
        "https://i.imgur.com/LYuWoyx.gif",
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle('Kisses how cute')
        .setDescription( `<@${user1.id}> **Kissed <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}