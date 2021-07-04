const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
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
            await nsfw.hentaiass(),
            await nsfw.hentai(),
            await nsfw.hmidriff(),
            await nsfw.hentaithigh(),
            await nsfw.nekopussy(),
            await nsfw.nekotits(),
        ];

        const Message1 = messages[Math.floor(Math.random() * messages.length)];

        const embed = new Discord.MessageEmbed()
            .setTitle(`Hentai`)
            .setColor("RANDOM")
            .setImage(Message1);
        return message.channel.send(embed);
    }
}
