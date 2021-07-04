
const sendResult = require("./sendResult.js");

module.exports = {
    name: '.',
    description: '.',
    async execute(client, message, args, command, Discord) {
        const messages = [
            "cats",
            "cat",
            "kittens",
            "kitty",
            "kittens",
            "kitties",
            "CuteCats",
            "SadCats",
            "SleepingCats",
            "CatPics",
            "CatGifs",
            "cats",
            "cat",
            "kittens",
            "kitty",
            "kitties",
            "CuteCats",
            "SadCats",
            "SleepingCats",
            "CatPics",
            "CatGifs",
            "cats",
        ];

        sendResult(client, message, args, command, Discord, messages);
    }
}





//const Discord = require("discord.js");
//cconst { RichEmbed, DiscordAPIError } = require("discord.js");
//cconst randomPuppy = require("random-puppy");

//module.exports = {
//    name: '.',
//   description: '.',
//    async execute(client, message, args, command) {
//        const subReddits = ["cat", "cats", "kittens"];
//        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
//
//
//        const img = await randomPuppy(random);
//        const embed = new Discord.MessageEmbed()
//            .setColor("RANDOM")
//            .setImage(img)
//            .setTitle(`From r/${random}`)
//            .setURL(`https://reddit.com/r/${random}`);
//
//        message.channel.send(embed);
//    }
//}