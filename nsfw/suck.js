module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        if (message.channel.nsfw) {

        } else {
            return message.channel.send("This channel is SFW.");
        }

        const messages = [
            "https://cdn.discordapp.com/attachments/809312996114432011/811136995283173416/image0.gif",
            "https://media.discordapp.net/attachments/586745211653324820/808087580364767272/938_450.gif",
            "https://media.discordapp.net/attachments/586745211653324820/808087581032054784/tumblr_oif5pywXWD1vdcrgho1_250.gif",
            "https://cdn.discordapp.com/attachments/809312996114432011/811323624069136404/by-buckethead-porn-gifs-sex-gif.gif",
            "https://cdn.discordapp.com/attachments/809312996114432011/811323773901996133/image6.png",
            "https://cdn.discordapp.com/attachments/809312996114432011/811325085851582504/gif-bj-gif_0.gif",
            "https://cdn.discordapp.com/attachments/809312996114432011/811325926200967178/tumblr_mfv6vfG8ui1s101xvo1_500.gif",
            "https://cdn.discordapp.com/attachments/809312996114432011/811326191310733322/551_1000.gif",
            "https://cdn.discordapp.com/attachments/809312996114432011/811326258767593512/detail.gif",
            "https://cdn.discordapp.com/attachments/809312996114432011/811326720888143962/3DdPB7W.gif",
            "https://cdn.discordapp.com/attachments/809312996114432011/811327002892042240/814_1000.gif",
            "https://img3.gelbooru.com/images/a4/d7/a4d7b4848a39e29a72b253c0496f9ba4.gif",
            "https://img3.gelbooru.com/images/97/7d/977dda1fcca8f828892ee8da8c3980d6.gif",
            "https://img3.gelbooru.com/images/4f/1c/4f1cfdaaca17deaa8f72cf289d601dc5.gif",
            "https://media.discordapp.net/attachments/818383822453473281/846266506714021908/image0.gif?width=741&height=502",
            "https://media.discordapp.net/attachments/818383822453473281/846266530983313408/image0.gif",
            "https://media.discordapp.net/attachments/818383822453473281/846266587127742464/image0.gif",
            "https://media.discordapp.net/attachments/818383822453473281/846266660460429332/image0.gif",
            "https://media.discordapp.net/attachments/818383822453473281/846266702073561088/image0.gif",
            "https://media.discordapp.net/attachments/818383822453473281/846266847836897291/image0.gif",
            "https://media.discordapp.net/attachments/818383822453473281/846267727218737172/image0.gif?width=376&height=501",
            "https://media.discordapp.net/attachments/818383822453473281/846268217855836190/image0.gif",
            "https://media.discordapp.net/attachments/818383822453473281/846269700626317332/image0.gif?width=891&height=502",
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user = message.mentions.users.first();
        const user1 = message.author;
        
        if(!user) {
            return message.reply("Mention a user dummy!");
        }
        
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setDescription( `<@${user1.id}> **Sucks <@${user.id}>**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}