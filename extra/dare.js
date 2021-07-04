module.exports = {
    name: '.',
    aliases: ['d'],
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
            'Let a user of your choice in the chat pick your avatar (for 1 day)',
            'Let a user of your choice in the chat pick your username (for 1 day)',
            'send a screenshot of your most recent dm\'s in chat (not of the dm\'s chat just the usernames)',
            'send a funny selfie',
            'let a user of your choice pick your phone/PC backgroud (for 1 day)',
            'Name one thing you would change about each person here',
            'Tell the group about your worst experience on a date',
            'Ghost ping the person you like',
            'Message someone you argued with and tell them that you\'re sorry',
            'If you had to date anyone here who would it be?',
            'Send a weird/embarrassing picture of yourself.',
            'Ask someone in this server out on a date',
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const user1 = message.author;
    
    const embed = new Discord.MessageEmbed()
        .setColor('#0000FF')
        .setTitle(`${user1.username}`)
        .setDescription( `${randomMessage}`)

        message.channel.send(embed);
    }
}