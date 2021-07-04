module.exports = async function sendRate(client, message, args, command, Discord, type) {
    const user = message.mentions.members.first() || message.member
    const rating = Math.floor(Math.random() * 100) + 1;

    const embed = new Discord.MessageEmbed()
    .setColor('#FF937B')
    .setTitle(`${type} Rating`)
    .setDescription( `<@${user.user.id}> you are **${rating}%** ${type}`)

    return message.channel.send(embed);
}