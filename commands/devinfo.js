const config = require("../config.json");

module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {

		const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Nugget Bot')
	.addFields(
		{ name: '**Main Dev**', value: `<@${config.owner1}>` },
		{ name: '**Special Thank To**', value: `<@${config.owner3}> For Website Help and Code Help`, inline: true},
        { name: '**Special Thank To**', value: `<@${config.owner2}> For Gif finding help`, inline: true},
        { name: '\u200B', value: '\u200B' },
        { name: '**Check out Bots Website**', value: '[Click Here](https://www.nuggetbot.xyz/)', inline: true},
        { name: '**invite**', value: '[Click Here](https://discord.com/oauth2/authorize?client_id=810614472607137803&scope=bot&permissions=388102)', inline: true},
        { name: '**Support**', value: '[Click Here](https://discord.gg/UJ6eTFkadu)', inline: true},
	)
	.setFooter('For any command suggestions join our support server by doing n.supportserver');

    message.channel.send(embed)
    
    }
 }