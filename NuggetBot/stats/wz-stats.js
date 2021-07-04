require('dotenv').config();
const cod_api = require('call-of-duty-api')();
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {
        if(!args[0]) return message.channel.send('Please enter a username');
        if(!args[1]) return message.channel.send('Please enter a platfrom');
 
        //Getting username and password from the .env file. If you don't have or need a .env file just hard code your username and password.
        let username = process.env.COD_USERNAME;
        let password = process.env.COD_PASSWORD;
 
        try{
            await cod_api.login(username, password);

            let data = await cod_api.MWBattleData(args[0], args[1]);
            
            const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Warzone Stats')
            .setDescription('Warzone stats')
            .setThumbnail('https://media.discordapp.net/attachments/816905273322766369/852101017780748288/Call_of_Duty_Warzone_Logo.png')
            .addFields(
                { name: 'Games Played', value: data.br_all.gamesPlayed, inline: true},
                { name: 'Wins', value: data.br_all.wins, inline: true},
                { name: 'KD Ratio', value: data.br_all.kdRatio, inline: true},
                { name: 'Kills', value: data.br_all.kills, inline: true},
                { name: 'Deaths', value: data.br_all.deaths, inline: true},
                { name: 'Downs', value: data.br_all.downs, inline: true},
                { name: 'Revives', value: data.br_all.revives, inline: true},
                {name: 'Total Time Played', value: (parseFloat(data.br_all.timePlayed / 3600).toFixed(2)) + " Hours"},
                { name: '\u200B', value: `**Random Info**`},
                { name: 'Top 5', value: data.br_all.topFive, inline: true},
                { name: 'Top 10', value: data.br_all.topTen, inline: true},
                { name: 'Top 25', value: data.br_all.topTwentyFive, inline: true},
            
            )
            message.channel.send(embed);
 
            //I left the console.log so you can see the reponse we are getting. You can delete this if you wish.
            console.log(data.br_all);
 //\u200B
        }catch(error){
            message.channel.send(`There was an error fetching this player`);
            throw error;
        }
    }
}