module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        message.channel.send([
            "```Heres the full SpongeBob movie for you```",
            "https://cdn.discordapp.com/attachments/789007056244834304/814045588202061824/AnotherMovie.mp4"
        ]);
    }
}