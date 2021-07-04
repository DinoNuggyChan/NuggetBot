module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
		const embed = new Discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('Github Info')
    .addFields(
        { name: '**My Github Profile**', value: "[Click Here](https://github.com/Oni-Chan-inc)" },
		{ name: '**.Nugget Bot~ ♡ Repository**', value: "[Click Here](https://github.com/Oni-Chan-inc/NuggetBot)", inline: true },
	)

    return message.channel.send(embed)
    }
 }