module.exports = {
    name: '.',
    aliases: ['hb'],
    description: ".",
    async execute(client, message, args, command, Discord) {
        const gbu = require("./gelbooru.js");
        const kch = require("./konachan.js");
        const r34 = require("./rule34.js");
        const yre = require("./yandere.js");

        if (message.channel.nsfw || !message.guild) {
            ms = message.content;
            message.content = '\'gbu';
            gbu.execute(client, message, args, command, Discord)
            message.content = '\'kch';
            kch.execute(client, message, args, command, Discord)
            message.content = '\'r34';
            r34.execute(client, message, args, command, Discord)
            message.content = '\'yre';
            yre.execute(client, message, args, command, Discord)
            message.content = ms;
        } else {
            return message.channel.send("This channel is not NSFW!");
        }
    }
}