module.exports = {
  name: '.',
  aliases: [],
  description: ".",
  async execute(client, message, args, command, Discord) {
		const embed = new Discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('Click here to get directed to the bot\'s invite page')
	.setURL('https://discord.com/oauth2/authorize?client_id=810614472607137803&scope=bot&permissions=1074129926')
    return message.channel.send(embed)
    }
 }