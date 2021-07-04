module.exports = {
    name: '.',
    aliases: ['boob', 'boobies'],
    description: ".",
    async execute(client, message, args, command, Discord) {
        if (message.channel.nsfw) {

        } else {
            return message.channel.send("This channel is SFW.");
        }

        const messages = [
            "https://images-ext-2.discordapp.net/external/AtwANyYvTe618YjYoixVlWDYO1LTGqfcwGK16D1Hoi4/%3Fwidth%3D705%26height%3D397/https/media.discordapp.net/attachments/586745211653324820/808082771100041246/detail.gif",
            "https://media.discordapp.net/attachments/586745211653324820/808082761221931018/gumball-hentai-bda12851e65c3a8c9c1104ae5366c090.gif",
            "https://media.discordapp.net/attachments/586745211653324820/808082766888566834/anime-girl-boobs-gif.gif",
            "https://media.discordapp.net/attachments/586745211653324820/808082773079752724/tenor.gif",
            "https://media.discordapp.net/attachments/586745211653324820/808082769624170506/unnamed.gif",
            "https://cdn.discordapp.com/attachments/784272708410015766/818893896570110042/image0.gif",
            "https://cdn.discordapp.com/attachments/784272708410015766/818893977562251284/image0.gif",
            "https://cdn.discordapp.com/attachments/784272708410015766/818894137175572510/image0.gif"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setTitle('Anime Tiddies')
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}