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
            "https://video-cdn3.gelbooru.com/images/63/ae/63ae37c5d982ea4ab84be4cbb2bc8e65.mp4",
            "https://video-cdn3.gelbooru.com/images/33/80/3380e75076cd4274e040f9c201aafcd2.mp4",
            "https://video-cdn3.gelbooru.com/images/e6/dd/e6ddc2e0b5630e6af6cb1cbb73a03471.mp4",
            "https://video-cdn3.gelbooru.com/images/d7/89/d789448c41cf65b83c887eac74be2470.mp4",
            "https://video-cdn3.gelbooru.com/images/3b/76/3b76d5f06d480ff12691d058e424e9d4.mp4",
            "https://video-cdn3.gelbooru.com/images/28/34/2834404caa310d5a74b1f52bee8b98a0.mp4",
            "https://video-cdn3.gelbooru.com/images/82/61/826109360e755d89086c980b5e29c34c.mp4",
            "https://video-cdn3.gelbooru.com/images/4e/c7/4ec7739722752ff5fd49bec370beb4fd.mp4",
            "https://video-cdn3.gelbooru.com/images/61/6a/616a3bca659812027e2072ae7ee1e435.mp4",
            "https://video-cdn3.gelbooru.com/images/91/e6/91e63a0c4f4e21e00cd686bec5ec48e4.mp4",
            "https://video-cdn3.gelbooru.com/images/8d/e1/8de194ceb11466742e1558fc0400b86e.mp4",
            "https://video-cdn3.gelbooru.com/images/29/7f/297fb3eb1527bccb76b709d59e29aba4.mp4",
            "https://video-cdn3.gelbooru.com/images/f2/de/f2de44aa2a28dd70ffcce6ecdea2141c.mp4",
            "https://video-cdn3.gelbooru.com/images/b2/7d/b27dc03832f92bd4f7fe28d294ac4c97.mp4",
            "https://video-cdn3.gelbooru.com/images/20/ac/20ace14d5e147d9830151f1a6bc4a3f9.mp4",
            "https://video-cdn3.gelbooru.com/images/c7/5c/c75c66d7ca275efce37522aef7f953c6.mp4",
            "https://video-cdn3.gelbooru.com/images/ba/f3/baf3178eb5ef804a0ddc0d454baf6552.mp4",
            "https://video-cdn3.gelbooru.com/images/73/3f/733f67fc08ce285c19da313d4f2adef4.mp4",
            "https://video-cdn3.gelbooru.com/images/01/49/014942c3a84151eecf7ea40ecf56909c.mp4",
            "https://video-cdn3.gelbooru.com/images/3e/60/3e60f5067a7ce13296c5514d302d4fa5.mp4",
            "https://video-cdn3.gelbooru.com/images/c3/f1/c3f1247163d27ac4cba93465bf09f11d.mp4",
            "https://cdn.discordapp.com/attachments/797739210417111050/844401998958821386/97672af99ad21ca17e3de7d6a4760e07.mp4"
        ];

        const video = messages[Math.floor(Math.random() * messages.length)];

        return message.channel.send([
            "```Heres Your Hentai Video```",
            `${video}`
        ]);
    }
}