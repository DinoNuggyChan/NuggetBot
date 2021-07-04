const client = require('nekos.life');
const {nsfw} = new client();
const neko = new client();

module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        let smug = await neko.sfw.smug();

        const user1 = message.author;
        
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setTitle('smug')
            .setDescription( `<@${user1.id}> **smugs**`)
            .setImage(smug.url)
    
            return message.channel.send(embed);
    }
}