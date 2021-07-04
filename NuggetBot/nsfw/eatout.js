module.exports = {
    name: '.',
    aliases: ['eat'],
    description: ".",
    async execute(client, message, args, command, Discord) {
         if (message.channel.nsfw) {

         } else {
            return message.channel.send("This channel is SFW.");
         }

        const messages = [
            "https://cdn.filobot.xyz/assets/commands/pussy/1.gif",
            "https://media.discordapp.net/attachments/784272708410015766/811809660654321694/image0.gif",
            "https://cdn.discordapp.com/attachments/818383822453473281/818415064561745940/tumblr_pfsoa6ACrW1xotgrao1_500.gif",
            "https://cdn.discordapp.com/attachments/818383822453473281/818415066638319656/tumblr_mxuu3tgSmR1sv5v4qo1_500.gif",
            "https://cdn.discordapp.com/attachments/784272708410015766/818893164432851004/image0.gif",
            "https://cdn.discordapp.com/attachments/784272708410015766/818893345404616794/image0.gif",
            "https://64.media.tumblr.com/5ca4974a5e946c5e28c38cc7e441ccfe/tumblr_mju1prxOxT1rke3fuo1_500.gifv",
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user = message.mentions.users.first();
        const user1 = message.author;
        
        if(!user) {
            return message.reply("Mention a user dummy!");
        }
        
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setDescription( `<@${user1.id}> **Eats out <@${user.id}>**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}