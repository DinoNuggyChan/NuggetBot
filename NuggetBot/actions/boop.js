module.exports = {
    name: 'boop',
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://images-ext-2.discordapp.net/external/W0IyfzAtEIA5M0uW8DxiIe6ucBNPhMen2IKVjmaLcu8/https/images-ext-2.discordapp.net/external/GZk0fp3_1LFa6DWmyW8YXWEa00NQ2BMc0sx2lC71OMI/https/media.discordapp.net/attachments/808141642443128879/808146754503573555/tenor_10.gif", 
        "https://media.discordapp.net/attachments/809312996114432011/811151131803516938/09a.gif",
        "https://media.discordapp.net/attachments/818371036562194463/818371245228818432/fde75886df37020bc37d7ba44c1e29ee.gif",
        "https://media.discordapp.net/attachments/818371036562194463/818371246055227392/08ced674cac2e7dd220dafa93b99b08d.gif",
        "https://media.discordapp.net/attachments/818371036562194463/818371667704676362/b495fb19f4b9a1b04f48297b676c497b.gif",
        "https://media.discordapp.net/attachments/818371036562194463/818371668375765042/H7Ok5tn.gif",
        "https://media.discordapp.net/attachments/818371036562194463/818371669659615232/tenor.gif",
        "https://media.discordapp.net/attachments/818371036562194463/818371669819129866/anime-boop-gif-1.gif",
        "https://media.discordapp.net/attachments/818371036562194463/818371670262939728/tenor_1.gif",
        "https://media.discordapp.net/attachments/818371036562194463/818371670627713024/s7rK7dSXlrkdVKccjtGe-dCIoDA_qp0cH8DwfoarF-nf8r1QOlG192-2ko6TtbF9TxocCuYvIDH5wJHOPcu2K3IJwkS4flqKhCkj.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user = message.mentions.users.first();
    const user1 = message.author;
    
    if(!user) {
        message.reply("Mention a user dummy!")
        return;}
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle('Booped')
        .setDescription( `<@${user1.id}> **Boops <@${user.id}>**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}