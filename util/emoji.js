const {Client, Message, Util} = require('discord.js');
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {


        if (!args.length) return message.reply ("Please specify some emoji's");

        for (const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if(parsedEmoji.id){

                const extenstion = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extenstion}`;

                const complete = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`Enlarged Emojis`)
                .setURL(url)
                .addFields(
                    { name: 'Emoji ID', value: `\`${parsedEmoji.id}\``, inline: true },
                    { name: 'Emoji Name', value: `\`${parsedEmoji.name}\``, inline: true},
                )

                .setImage(url)
                
                return message.reply(complete);
                
            }

        }

    }
}