
const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {

        let cuddle = await neko.sfw.cuddle();

        const messages = [
        "https://media.discordapp.net/attachments/818374852242833440/818375980447563814/p2Jt2P5.gif",
        "https://media.discordapp.net/attachments/818374852242833440/818376663507009566/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif",
        `${cuddle.url}`,
        "https://media.discordapp.net/attachments/818374852242833440/818376664773296138/55258cbcc1b54997062a40676c591765.gif",
        "https://media.discordapp.net/attachments/818374852242833440/818376665402310696/tenor_1.gif",
        `${cuddle.url}`,
        "https://media.discordapp.net/attachments/818374852242833440/818376667701182504/11831b4efbc681e3a58ea0653740345f.gif",
        "https://media.discordapp.net/attachments/818374852242833440/818376674688106506/tenor.gif",
        `${cuddle.url}`,
        "https://media.discordapp.net/attachments/818374852242833440/818376805542658078/a.gif",
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle('Cuddles')
        .setDescription( `<@${user1.id}> **cuddles <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}