module.exports = {
    name: '.',
    aliases: ['sd'],
    description: ".",
    async execute(client, message, args, command, Discord) {

		const twitch = client.emojis.cache.get("831021408884359189")

		const steam = client.emojis.cache.get("847628563884015648")

		const yay = client.emojis.cache.get("847628319587041370")

		const spin1 = client.emojis.cache.get("803719060578631710")

		const spin2 = client.emojis.cache.get("831025446203686912")
		
		const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Support Nugget Bot Dev\'s')
	.addFields( 
		{ name: '**Support Main Dev**', value: '<@411704274599542794>' },
		{ name: `${twitch}`, value: `Twitch Channel [Click here](https://www.twitch.tv/mrderpy_panda)`, inline: true},
		{ name: `${steam}`, value: `Leave My Steam Profile an Award ${yay} [Click here](https://steamcommunity.com/id/OniChanInc/)`, inline: true},
        { name: '\u200B', value: '\u200B' },
		{ name: '**Support Website/Coder Dev**', value: '<@308440976723148800>' },
		{ name: `${spin1}`, value: `Their Website [Click here](https://waa.ai/spinpy)`, inline: true},
		{ name: `${spin2}`, value: `Twitter Profile [Click here](https://twitter.com/spinfal)`, inline: true},
	)
	.setFooter('For any command suggestions join our support server by doing n.supportserver');

    message.channel.send(embed)
    }
 }