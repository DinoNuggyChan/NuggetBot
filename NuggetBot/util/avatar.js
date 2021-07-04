module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024, dynamic: true})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);
    }
}