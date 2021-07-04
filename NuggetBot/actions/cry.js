module.exports = {
    name: 'boop',
    description: "Sends a Random Boop Gif Mention a user",
    async execute(client, message, args, command, Discord) {

        const messages = [
        "https://cdn.discordapp.com/attachments/809312996114432011/811814951659634688/455e4e62c094f245a288f4e5cf4a0dc20380dcd6r1-480-271_hq.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814953127510106/tenor_14.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814957619871795/200.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814959171764244/CwUSjuy.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814959305457674/5a87dca264c8a2c651eed4a4cb5228e9.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814959842721842/tumblr_04b9cf3445f490fd1f55b9dcdc24a558_14b9d800_500.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814960987897866/5dd7f0ecc3c4a4f04227383a06cb4466.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814960987897866/5dd7f0ecc3c4a4f04227383a06cb4466.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814963731365928/tumblr_nq1t6uTqRq1qcsnnso1_540.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814966611935252/tenor_13.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814970839924766/b4b1640525ecadfa1030e6096f3ec842.gif",
        "https://cdn.discordapp.com/attachments/809312996114432011/811814996026851358/e0fbb27f7f829805155140f94fe86a2e.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user1 = message.author;
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle('crying😞')
        .setDescription( `<@${user1.id}> **is crying**`)
        .setImage(randomMessage)

        message.channel.send(embed);
}
}