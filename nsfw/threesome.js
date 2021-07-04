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
            "https://media.discordapp.net/attachments/822407584271040522/822407736637128714/image0.gif?width=450&height=253",
            "https://media.discordapp.net/attachments/822407584271040522/822407831449763840/image0.gif?width=360&height=239",
            "https://cdn.discordapp.com/attachments/822407584271040522/822408207875440650/image0.gif",
            "https://cdn.discordapp.com/attachments/822407584271040522/822408480681492511/image0.gif",
            "https://cdn.discordapp.com/attachments/822407584271040522/822410460191653888/image0.gif",
            "https://cdn.discordapp.com/attachments/822407584271040522/822411609091342336/image0.gif"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const users = message.mentions.users.first(2);
        const [user1,user2] = users;
        const user = message.author;
    
        if(!user1) {
            return message.reply("Mention a user dummy!");
        }

        if(!user2) {
            return message.reply("Mention a second user dummy!");
        }
        
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setTitle('')
            .setDescription( `**<@${user.id}>, <@${user2.id}> and <@${user1.id}> are having a threesome**`)
            .setImage(randomMessage)

            return message.channel.send(embed);
    }
}