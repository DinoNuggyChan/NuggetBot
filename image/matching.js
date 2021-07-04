module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {

        const messages = [
            "https://i.imgur.com/RyHMEJK.jpeg https://i.imgur.com/0C0VsiE.jpeg",
            "https://imgur.com/1ZY21BL https://imgur.com/n61M1lM",
            "https://imgur.com/QZ5TaES https://imgur.com/ELpxwuh",
            "https://imgur.com/0vjZ5cO https://imgur.com/AhIOhiA",
            "https://imgur.com/YGoawu2 https://imgur.com/Fe21b2i",
            "https://imgur.com/dpek8aB https://imgur.com/e4se9vu",
            "https://imgur.com/SSapYDU https://imgur.com/BNurXfR",
            "https://imgur.com/xVr3E1y https://imgur.com/Rm0vOzu",
            "https://imgur.com/kE0zCxf https://imgur.com/tka3u9q",
            "https://imgur.com/njouHc0 https://imgur.com/ekfKOfC",
            "https://imgur.com/pCLYYNF https://imgur.com/QRQACL0",
            "https://imgur.com/Sqm4he8 https://imgur.com/iiXThCH",
            "https://imgur.com/albpzEx https://imgur.com/ByzJvfH",
            "https://imgur.com/jAym7p4 https://imgur.com/wp3ctYS",
            "https://imgur.com/5v1u1Qw https://imgur.com/Oh4wWyT",
            "https://imgur.com/hxxXWdD https://imgur.com/mNZWlao",
            "https://imgur.com/m2dblSY https://imgur.com/wZIwy4Y",
            "https://imgur.com/IHMCwOw https://imgur.com/5RKwuuz",
            "https://imgur.com/c9xZVdO https://imgur.com/Fkmo4Yg",
            "https://imgur.com/HtwpntS https://imgur.com/UEw2q0w",
            "https://imgur.com/ZeoGIPc https://imgur.com/ZsYXvOF",
            "https://imgur.com/5QEXqMg https://imgur.com/TQzu3Rb",
            "https://imgur.com/3BjkcHa https://imgur.com/vXTw6Cd",
            "https://imgur.com/1WHozMP https://imgur.com/elD4WrT",
            "https://imgur.com/Vs5tmhW https://imgur.com/ZUzwyH5",
            "https://i.imgur.com/2eocs0T.jpg https://i.imgur.com/n2XuT3l.jpg",
            "https://imgur.com/VxDdAGV https://imgur.com/GWUbkyx",
            "https://imgur.com/kjyOg1Y https://imgur.com/W3avnne",
            "https://imgur.com/W498wFK https://imgur.com/ajfuilG",
            "https://imgur.com/jiqWGMm https://imgur.com/hVOgSgg",
            "https://imgur.com/pXt10j3 https://imgur.com/qUX5VPh",
            "https://imgur.com/ZCrVYnI https://imgur.com/ujJhD3d",
            "https://imgur.com/pi13205 https://imgur.com/N6N2wUG",
            "https://imgur.com/e1o9l8b https://imgur.com/xreX4Sf",
            "https://imgur.com/8ujftSs https://imgur.com/nT3OsjM",
            "https://imgur.com/G7ckxRG https://imgur.com/Ap5F0HI",
            "https://imgur.com/blIJrDR https://imgur.com/K6PhWXW",
            "https://imgur.com/l9gMjMn https://imgur.com/wMgWcJ2",
            "https://imgur.com/qeWkOMP https://imgur.com/4P0Kt0v",
            "https://imgur.com/zFlH8Cd https://imgur.com/nNLMvpv",
            "https://imgur.com/Bi2TDEK https://imgur.com/UiC5Wem",
            "https://imgur.com/RzOuT6u https://imgur.com/aAOF1To",
            "https://imgur.com/T7cqDl2 https://imgur.com/6LE5rUk",
            "https://imgur.com/veZDgqp https://imgur.com/h8JdcCw",
            "https://imgur.com/vWXDbXO https://imgur.com/iAwYiKM",
            "https://imgur.com/maWDVTs https://imgur.com/TgJDRl4",
            "https://imgur.com/nOPsAMD https://imgur.com/QKpfubD",
            "https://imgur.com/W64UJ7h https://imgur.com/6w3oZMl",
            "https://imgur.com/KFPuial https://imgur.com/iZMZMyb"
        ];

        const pfp = messages[Math.floor(Math.random() * messages.length)];

        return message.channel.send([
            `**Here's a Matching PFP Set** (non-animated)`,
            `${pfp}`
        ]);
    }
}