const client = require('nekos.life');
const {nsfw} = new client();
const neko = new client();
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        var argt = args.toString().replace(/,/g, ' ');

        let owo = await neko.sfw.OwOify({text: argt});

		const embed = new Discord.MessageEmbed()
            .setColor('#FFE082')
            .addFields(
                { name: 'OwOify', value: `${owo.owo}`, inline: true },
            )
            
            .setTimestamp()
            return message.channel.send(embed)
    }
};
