module.exports = {
  name: '.',
  aliases: [],
  description: ".",
  async execute(client, message, args, command, Discord) {
		const embed = new Discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('Click here to join our support server')
	.setURL('https://discord.gg/UJ6eTFkadu')
    return message.channel.send(embed)
    }
 }