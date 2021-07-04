module.exports = {
    name: '.',
    aliases: ['hentai-search'],
    description: ".",
    async execute(client, message, args, command, Discord) {
        if (message.channel.nsfw || !message.guild) {
            const req = require('../https.js');
            const xml2js = require('xml2js');
            var parser = new xml2js.Parser();
            var argt = args.toString().replace(/,/g, ' ');
            var url = 'https://gelbooru.com/index.php?page=dapi&s=post&limit=100&q=index&tags='+argt;

            req(url).then((prom) => {
                parser.parseString(prom, function (err, result) {
                    var postCount = result.posts.$.count;
                    if (postCount > 100) {
                        postCount = 100;
                    }
                    if (postCount > 0) {
                        var picNum = Math.floor(Math.random() * postCount) + 0;
                        var Pic = result.posts.post[picNum].$.file_url;
                        const footer = 'All images come from https://gelbooru.com/';

                        const user = message.author;

                        const complete = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(``)
                        .setDescription(`${user} asked for **${argt}**`)

                        .setFooter(footer)
                        .setImage(Pic)

                        return message.reply(complete);
                    } else {
                        const user = message.author;
                        const footer = 'All images come from https://gelbooru.com/';
                        
                        const fail = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(``)
                        .setDescription(`Can't find ${argt}, sorry ${user}`)

                        .setFooter(footer)

                        return message.reply(fail);
                        
                        //message.channel.send(`*Can's Find Subject* **${argt}**`);
                    }
                });
            });
        } else {
            message.channel.send("This channel is not NSFW!");
        }
    }
}