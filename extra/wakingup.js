module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        message.channel.send([
            "```Waking Up```",
            "https://cdn.discordapp.com/attachments/747279304618016788/822911723517378570/no.mp4"
        ]);
    }
}