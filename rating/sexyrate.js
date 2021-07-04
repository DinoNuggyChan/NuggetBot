
const sendRate = require("./sendRate.js");

module.exports = {
    name: 'sexyrate',
    description: 'sexyrate',
    async execute(client, message, args, command, Discord,) {
        sendRate(client, message, args, command, Discord, 'Sexy');
    }
}