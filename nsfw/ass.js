const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const sendNsfw = require("./sendNsfw");

module.exports = {
    name: '.',
    description: '.',
    async execute(client, message, args, command, Discord,) {
        sendNsfw(client, message, args, command, Discord, 'Ass Image', await nsfw.ass());
    }
}