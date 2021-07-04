const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = async function sendRate(client, message, args, command, Discord, title, type) {
    if (message.channel.nsfw) {

    } else {
        message.channel.send("This channel is SFW.");
        return;
    }
    
    const image = type;

    const embed = new Discord.MessageEmbed()
    .setTitle(title)
    .setColor("RANDOM")
    .setImage(image);

    return message.channel.send(embed);
}