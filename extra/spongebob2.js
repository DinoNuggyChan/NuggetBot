module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        message.channel.send([
            "```Heres a full SpongeBob episode for you```",
            "https://cdn.discordapp.com/attachments/804758681752567819/822695791210659851/video0.mp4"
        ]);
    }
}