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
            "https://cdn.discordapp.com/attachments/850439581140779018/850448219809120286/2021-05-14-Anim5.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850448242599919637/2021-05-14-Anim4.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850448242993791006/2021-05-14-Anim6.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850448255077711912/2021-05-14-Anim1.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850448263244546059/2021-05-14-Anim2.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850448264741781585/2021-05-14-Anim3.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850448345935118356/2020-10-20-Loba-Revenant-loop-1.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850448353417494538/2020-10-20-Loba-Revenant-loop-3-alt.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850448386356019210/2020-10-20-Loba-Revenant-loop-2-alt.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850448386239102996/2020-10-20-Loba-Revenant-loop-2.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850450961680039986/2021-04-11-Wraith_POV_Front.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451060740194334/2021-04-11-Bangalore_Moneyshot.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451065600999484/2021-04-11-Bangalore_POV_Back.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451072678232095/2021-04-11-Bangalore_POV_Front.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451078825902110/2021-04-11-Loba_Back.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451083776360448/2021-04-11-Loba_Front.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451086531362868/2021-04-11-Wattson_Back.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451089366319134/2021-04-11-Wattson_Front.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451091425460274/2021-04-11-Wattson_Moneyshot.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451094919708682/2021-04-11-Wattson_POV_Back.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451103329943603/2021-04-11-Wraith_POV_Front_1.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451118394703952/2020-11-19-Loba-bbc.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451397760516116/2021-04-11-Wraith_POV_Back.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451397848727562/2021-04-11-Wraith_Moneyshot.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451399942864926/2021-04-11-Wraith_Front.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451400419835934/2021-04-11-Wattson_RaceCar_POV_Back.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451400424947772/2021-04-11-Wraith_Back.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451400919875624/2021-04-11-Wattson_RaceCar_Moneyshot.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451601964793892/2021-04-11-Twitter_Post.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451640569692200/2021-04-11-Bangalore_Long_Loop.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451641505284166/2021-04-11-Loba_Long_Loop.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451646521671700/2021-04-11-Wattson_Long_Loop.mp4",
            "https://cdn.discordapp.com/attachments/850439581140779018/850451647906054215/2021-04-11-Wraith_Long_Loop.mp4"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const user = message.author;


            message.channel.send([
                `<@${user.id}> heres some apex hentai`,
                '',
                `${randomMessage}`
            ]);
    }
}