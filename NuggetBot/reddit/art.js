const sendResult = require("./sendResult.js");

module.exports = {
    name: '.',
    description: '.',
    async execute(client, message, args, command, Discord) {
        const messages = [
            "drawing",
            "art",
            "AnimeSketch",
            "characterdrawing",
            "sketches",
            "AnimeSketch",
            "characterdrawing",
            "art",
            "sketches",
            "drawing",
        ];

        sendResult(client, message, args, command, Discord, messages);
    }
}