
const sendRate = require("./sendRate.js");

module.exports = {
    name: 'stankrate',
    description: 'stankrate',
    async execute(client, message, args, command, Discord,) {
        sendRate(client, message, args, command, Discord, 'Stank');
    }
}