
const sendResult = require("./sendResult.js");

module.exports = {
    name: '.',
    description: '.',
    async execute(client, message, args, command, Discord) {
        const messages = [
            "food", 
            "foodporn", 
            "cooking",
            "slowcooking",
            "Baking",
            "shittyfoodporn",
            "cooking",
            "slowcooking",
            "Baking",
            "Baking",
            "cooking",
            "slowcooking",
            "shittyfoodporn",
            "food", 
            "foodporn", 
        ];

        sendResult(client, message, args, command,  Discord, messages);    }
}




// const Discord = require("discord.js");
// const { RichEmbed, DiscordAPIError } = require("discord.js");
// const randomPuppy = require("random-puppy");

// module.exports = {
//     name: '.',
//     description: '.',
//     async execute(client, message, args, command) {
//         const subReddits = ["food", "foodporn", "cooking"];
//         const random = subReddits[Math.floor(Math.random() * subReddits.length)];


//         const img = await randomPuppy(random);
//         const embed = new Discord.MessageEmbed()
//             .setColor("RANDOM")
//             .setImage(img)
//             .setTitle(`From r/${random}`)
//             .setURL(`https://reddit.com/r/${random}`);

//         message.channel.send(embed);
//     }
// }