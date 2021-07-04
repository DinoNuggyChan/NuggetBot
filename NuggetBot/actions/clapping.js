module.exports = {
  name: 'boop',
  description: "Sends a Random Boop Gif Mention a user",
  async execute(client, message, args, command, Discord) {

        const messages = [
        "https://media.discordapp.net/attachments/839741336394399765/839741920565133312/tenor.gif",
        "https://media.discordapp.net/attachments/839741336394399765/839741924436082729/tenor_1.gif",
        "https://media.discordapp.net/attachments/839741336394399765/839741926236487750/tenor_2.gif",
        "https://media.discordapp.net/attachments/839741336394399765/839741926936543242/tenor_3.gif",
        "https://media.discordapp.net/attachments/839741336394399765/839741927141146644/tenor_4.gif",
        "https://media.discordapp.net/attachments/839741336394399765/839741927171031040/495a998326b0d98f86287f2793959ba8.gif",
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const user1 = message.author; 

    const user2 = message.mentions.users.first()
    if (message.mentions.members.first()) {

         const withuser = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setDescription( `<@${user1.id}> **is clapping for <@${user2.id}>**`)
        .setImage(randomMessage)


            message.channel.send(withuser);
          }else{
            const nouser = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setDescription( `<@${user1.id}> **is clapping**`)
            .setImage(randomMessage)

            return message.channel.send(nouser)
          }

}
}