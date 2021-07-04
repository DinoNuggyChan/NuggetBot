const sendRate = require("./sendRate.js");

module.exports = {
    name: 'pograte',
    description: 'pograte',
    async execute(client, message, args, command, Discord,) {
        sendRate(client, message, args, command, Discord, 'Pog');
    }
}