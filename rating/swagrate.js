
const sendRate = require("./sendRate.js");

module.exports = {
    name: 'swagrate',
    description: 'swagrate',
    async execute(client, message, args, command, Discord,) {
        sendRate(client, message, args, command, Discord, 'Swag');
    }
}