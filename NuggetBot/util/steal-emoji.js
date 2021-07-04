const {Client, Message, Util} = require('discord.js');
module.exports = {
    name: '.',
    aliases: ['add'],
    description: ".",
    async execute(client, message, args, command, Discord) {
        if (message.member.guild.me.hasPermission("MANAGE_EMOJIS", "ADMINISTRATOR"))
        if (!message.member.hasPermission("MANAGE_EMOJIS", "ADMINISTRATOR")) return message.channel.send("You need `ADMINISTRATOR` or `MANAGE_EMOJIS` to use this command.");
    
        if (!args.length) return message.reply ("Please Specify some emoji's");

        for (const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if(parsedEmoji.id){

                const extenstion = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extenstion}`;

                message.guild.emojis.create(url, parsedEmoji.name)
                .then((emoji) => {  
                    
                    const yeet = client.emojis.cache.get(`${emoji.id}`)

                    const complete = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(`Complete \`${parsedEmoji.name}\` added`)
                    .setDescription(`Url: \`${emoji.url}\``)
                    .addField("Emoji:", `${yeet}`)
                    return message.reply(complete);
                    

                })


            .catch(() => { 

                const failed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`Failed`)
                .setDescription('Failed to add because you are at max emotes')
                .setImage(url)
                
                return message.reply(failed);
                
            })
        }
    }
}

}