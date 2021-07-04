module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        message.channel.send([
            "```Here's the full Shrek movie for you```",
            "https://cdn.discordapp.com/attachments/359604850541068288/746859367986626721/video0.mp4"
        ]);
    }
}