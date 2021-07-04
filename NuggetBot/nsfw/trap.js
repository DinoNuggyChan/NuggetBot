const nekoclient = require('nekos.life');
const neko = new nekoclient();
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        if (message.channel.nsfw) {

        } else {
            return message.channel.send("This channel is SFW.");
        }
        
        if (!message.guild) return;

        const lo = new Discord.MessageEmbed()
        .setDescription(`Searching...`)
        .setTimestamp()
        message.channel.send(lo).then(m => {
            (async function() {
                const GIF = await neko.nsfw.trap();

                const embed = new Discord.MessageEmbed()
                .setColor('#202225')
                .setTitle(`${message.author.tag} here's a random trap image/gif`)
                .setImage(GIF.url)
                m.edit(embed);
            }());
        });
    }
}