module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
            "https://imgur.com/yQxpFdQ https://imgur.com/MoXaV59",
            "https://imgur.com/yWnUeBg https://imgur.com/UEnTlSP",
            "https://imgur.com/Qni8dzh https://imgur.com/7FhgVQ6",
            "https://imgur.com/cuEiVIv https://imgur.com/CONAC0q",
            "https://imgur.com/rLHIrv4 https://imgur.com/lcSTBme",
            "https://imgur.com/aXoUeav https://imgur.com/IZAAHeA",
            "https://imgur.com/7SiECxL https://imgur.com/eRH8BG7",
            "https://imgur.com/VQQw0J4 https://imgur.com/4N1mVhL",
            "https://imgur.com/8kV64wx https://imgur.com/yzfCxtV",
            "https://imgur.com/uCVHXEC https://imgur.com/x53kKcL",
            "https://imgur.com/MUUIq9X https://imgur.com/wTK6ymk",
            "https://imgur.com/ruxRbd3 https://imgur.com/sLdtRCg",
            "https://imgur.com/FwgM3xH https://imgur.com/k0Ypayc",
            "https://imgur.com/KVeDWcU https://imgur.com/HzlLlID",
            "https://imgur.com/wQB6Vlu https://imgur.com/2jSIFGH",
            "https://imgur.com/vqEPI1B https://imgur.com/IMLGQdu",
            "https://imgur.com/1UDwTcO https://imgur.com/o9mhIhW",
            "https://imgur.com/td49H47 https://imgur.com/q8aDonP",
            "https://imgur.com/JS09gwN https://imgur.com/fpHpMuM",
            "https://imgur.com/KSWTN5z https://imgur.com/0u9OlhD",
            "https://imgur.com/dZ0Jeq2 https://imgur.com/A3kLjqT",
        ];

        const pfp = messages[Math.floor(Math.random() * messages.length)];

        return message.channel.send([
            `**Here's a Matching PFP Set** (animated)`,
            `${pfp}`
        ]);
    }
}