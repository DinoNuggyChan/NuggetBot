
const sendResult = require("./sendResult.js");

module.exports = {
    name: '.',
    description: '.',
    async execute(client, message, args, command, Discord) {
        const messages = [
            "cute",
            "aww", 
            "kittens", 
            "Animals", 
            "puppy",
            "Animals", 
            "puppy",
            "cute",
            "aww", 
            "kittens", 
            "Animals", 
            "puppy",
            "Animals",
            "cute",
            "aww", 
            "kittens", 
            "Animals", 
            "puppy",
        ];

        sendResult(client, message, args, command, Discord, messages);
    }
}



// const Discord = require("discord.js");
// const { RichEmbed, DiscordAPIError } = require("discord.js");
// const randomPuppy = require("random-puppy");

// module.exports = {
//     name: '.',
//     description: '.',
//     async execute(client, message, args, command) {
//         const subReddits = ["cute", "aww", "kittens", "Animals", "puppy"];
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