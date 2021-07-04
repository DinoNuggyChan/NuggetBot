module.exports = {
  name: '.',
  description: ".",
  async execute(client, message, args, command, Discord) {


        const messages = [
        "https://cdn.discordapp.com/attachments/818952904252850186/819089484049416201/c.gif",
        "https://cdn.discordapp.com/attachments/818952904252850186/819089487299870720/f.gif",
        "https://cdn.discordapp.com/attachments/818952904252850186/819089487195275274/u.gif",
        "https://cdn.discordapp.com/attachments/818952904252850186/819089490815615016/h.gif",
        "https://cdn.discordapp.com/attachments/818952904252850186/819089494284042280/m.gif",
        "https://cdn.discordapp.com/attachments/818952904252850186/819089496292458526/t.gif",
        "https://cdn.discordapp.com/attachments/818952904252850186/819089498558300170/r.gif"
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const user1 = message.author; 

    const user2 = message.mentions.users.first()
    if (message.mentions.members.first()) {

         const withuser = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setDescription( `<@${user1.id}> **is laughing at** <@${user2.id}>`)
        .setImage(randomMessage)


            message.channel.send(withuser);
          }else{
            const nouser = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setDescription( `<@${user1.id}> **is laughing**`)
            .setImage(randomMessage)

            return message.channel.send(nouser)
          }

}
}