module.exports = {
    name: '.',
    aliases: ['kc'],
    description: ".",
    async execute(client, message, args, command, Discord) {
        if (message.channel.nsfw || !message.guild) {
            const req = require('../https.js');
            const xml2js = require('xml2js');
            var parser = new xml2js.Parser();
            var argt = args.toString().replace(/,/g, ' ');
            var url = 'https://konachan.com/post.xml?limit=100&tags='+argt;

            req(url).then((prom) => {
                parser.parseString(prom, function (err, result) {
                    var postCount = result.posts.$.count;
                    if (postCount > 100) {
                        postCount = 100;
                    }
                    if (postCount > 0) {
                        var picNum = Math.floor(Math.random() * postCount) + 0;
                        var Pic = result.posts.post[picNum].$.file_url;
                        const footer = 'All images come from https://konachan.com/';

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
                        const footer = 'All images come from https://konachan.com/';
                        
                        const fail = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(``)
                        .setDescription(`Can't Find ${argt}, Sorry ${user}`)

                        .setFooter(footer)

                        return message.reply(fail);
                    }
                });
            });
        } else {
            message.channel.send("This channel is not NSFW!");
        }
    }
}