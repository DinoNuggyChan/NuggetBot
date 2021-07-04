module.exports = {
  name: '.',
  aliases: [],
  description: ".",
  async execute(client, message, args, command, Discord) {
		const embed = new Discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('Click here to go to our Website')
	.setURL('https://www.nuggetbot.xyz/')
    return message.channel.send(embed)
    }
 }