module.exports = {
    name: '.',
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://media.discordapp.net/attachments/818372145549279242/818374051059859496/r9aU2xv.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374051176513566/tenor_3.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374054247530526/BountifulElderlyCusimanse-max-1mb.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374055940980766/6db54c4d6dad5f1f2863d878cfb2d8df.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374058114678814/tumblr_ma7l17EWnk1rq65rlo1_500.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374059733155871/tumblr_n5uovjOi931tp7433o1_500.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374060600721428/tenor_2.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374062916239391/d6a08bbe22fee4a9-.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374066943295498/giphy_1.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374067391299604/200.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374095469019146/3OzmqMS.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374096533585980/tenor_1.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374096521920522/f2805f274471676c96aff2bc9fbedd70.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374099028934696/tenor.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374099335512094/giphy.gif",
        "https://media.discordapp.net/attachments/818372145549279242/818374103722360842/8572a1d1ebaa45fae290e6760b59caac.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle('Hugs')
        .setDescription( `<@${user1.id}> **Hugged <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}