module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
         if (message.channel.nsfw) {

         } else {
            return message.channel.send("This channel is SFW.");
         }

        const messages = [
            "https://cdn.discordapp.com/attachments/809311421795532824/810311969688387634/unnamed.gif",
            "https://cdn.discordapp.com/attachments/809311421795532824/810312091843428373/detail.gif",
            "https://media.discordapp.net/attachments/809312996114432011/811136853255913502/image0.gif?width=895&height=504",
            "https://images-ext-1.discordapp.net/external/-TWqIn-FKFBqilRiKvnycLpAHcKj3YiR_q4NnOijsnE/%3Fwidth%3D848%26height%3D478/https/media.discordapp.net/attachments/784272708410015766/810391831812112404/detail.gif",
            "https://media.discordapp.net/attachments/586745211653324820/808085205834268712/detail.gif",
            "https://media.discordapp.net/attachments/586745211653324820/808085201149493248/5384b11305bbf94aa21f1f0e8c7610b0.gif",
            "https://media.discordapp.net/attachments/784272708410015766/810390201490079774/tumblr_pe053m8of21tbif4ko7_1280.gif?width=637&height=478",
            "https://media.discordapp.net/attachments/586745211653324820/808085200306831430/939_450.gif",
            "https://cdn.discordapp.com/attachments/809312996114432011/811137446434963476/image0.gif",
            "https://cdn.discordapp.com/attachments/809312996114432011/811137728917143552/image0.gif",
            "https://cdn.discordapp.com/attachments/809312996114432011/811138228634517514/image0.gif",
            "https://purrbot.site/img/nsfw/fuck/gif/fuck_346.gif",
            "https://cdn.discordapp.com/attachments/784272708410015766/818894137175572510/image0.gif",
            "https://img3.gelbooru.com/images/67/2a/672a296bdd0162f3f1c62f25497cfbfc.gif",
            "https://img3.gelbooru.com/images/5c/ff/5cffb657abbc3ac66e240373aacc8b71.gif",
            "https://img3.gelbooru.com/images/b7/60/b7608d6b5b22971338e77c299097f09c.gif",
            "https://img3.gelbooru.com/images/a9/bf/a9bf666c02712423d65ed56d996ab0dd.gif",
            "https://img3.gelbooru.com/images/fe/3d/fe3d3d415ccb560aa41f0fc9e4904b51.gif",
            "https://img3.gelbooru.com/images/3d/1a/3d1a52e386b476cafa21051caf89a57b.gif",
            "https://img3.gelbooru.com/images/b2/2e/b22ebe83e5083789d085037f7d27a802.gif",
            "https://img3.gelbooru.com/images/f6/1b/f61b402a97cd0897101eff7bec4ed308.gif",
            "https://cdn.discordapp.com/attachments/823541579582275626/836691291659042826/image0.gif",
            "https://cdn.discordapp.com/attachments/823541579582275626/836691492307206174/image0.gif",
            "https://cdn.discordapp.com/attachments/823541579582275626/836691516491300926/image0.gif",
            "https://cdn.discordapp.com/attachments/823541579582275626/836691583931121734/image0.gif",
            "https://cdn.discordapp.com/attachments/823541579582275626/836691855411511336/image0.gif",
            "https://cdn.discordapp.com/attachments/823541579582275626/836691914370580500/image0.gif",
            "https://cdn.discordapp.com/attachments/823541579582275626/836691980096241745/image0.gif",
            "https://cdn.discordapp.com/attachments/823541579582275626/836692069379604551/image0.gif",
            "https://cdn.discordapp.com/attachments/823541579582275626/836692156731097154/image0.gif",
            "https://media.discordapp.net/attachments/784272708410015766/836722645403566090/unnamed_1.gif",
            "https://media.discordapp.net/attachments/784272708410015766/836722517392490526/Anime-Hentai-Gif-3.gif",
            "https://media.discordapp.net/attachments/784272708410015766/836722452364656650/detail_2.gif",
            "https://media.discordapp.net/attachments/784272708410015766/836722344998207548/dessins-hentai-sexe-min.gif",
            "https://media.discordapp.net/attachments/784272708410015766/836722054493503508/1.gif",
            "https://media.discordapp.net/attachments/784272708410015766/836722222181253142/detail_1.gif",
            "https://media.discordapp.net/attachments/784272708410015766/830974442989289482/image0.gif",
            "https://media.discordapp.net/attachments/784272708410015766/830975717529354280/image0.gif",
            "https://media.discordapp.net/attachments/822431251939328000/846268847208267806/image0.gif",
            "https://media.discordapp.net/attachments/822431251939328000/846269014573056010/image0.gif",
            "https://media.discordapp.net/attachments/822431251939328000/846269297570873364/image0.gif",
            "https://media.discordapp.net/attachments/822431251939328000/846269752594923520/image0.gif",
            "https://media.discordapp.net/attachments/822431251939328000/846270881394065448/image0.gif",
            "https://media.discordapp.net/attachments/822431251939328000/846270893303136286/image0.gif",
            "https://media.discordapp.net/attachments/822431251939328000/846271494559367198/image0.gif",
            "https://media.discordapp.net/attachments/822431251939328000/846272146443075584/image0.gif",
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user = message.mentions.users.first();
        const user1 = message.author;
        
        if(!user) {
            return message.reply("Mention a user dummy!");
        }
        
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setDescription( `<@${user1.id}> **fucked <@${user.id}>**`)
            .setImage(randomMessage)

            return message.channel.send(embed);       
    }
}