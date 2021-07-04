
const sendRate = require("./sendRate.js");

module.exports = {
    name: 'simprate',
    description: 'simprate',
    async execute(client, message, args, command, Discord,) {
        sendRate(client, message, args, command, Discord, 'Simp');
    }
}