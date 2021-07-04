module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        message.channel.send([
            "```Here's the full Joker movie for you```",
            "https://cdn.discordapp.com/attachments/724009203072761876/754889526463430716/Joker_2019.webm"
        ]);
    }
}