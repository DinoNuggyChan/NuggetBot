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
            let data = await cod_api.MWmp(args[0], args[1]);
            
            const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Modern Warfare Stats')
            .setDescription('Modern Warfare stats')
            .setThumbnail('https://media.discordapp.net/attachments/816905273322766369/852101413257084928/dr1xkju11c131.png?width=808&height=455')
            .addFields(
                { name: 'Level', value: data.level, inline: true},
                { name: 'Games Played', value: data.lifetime.all.properties.totalGamesPlayed, inline: true},
                { name: 'Wins', value: data.lifetime.all.properties.wins, inline: true},
                { name: 'Losses', value: data.lifetime.all.properties.losses, inline: true},
                { name: 'KD Ratio', value: data.lifetime.all.properties.kdRatio, inline: true},
                { name: 'Kills', value: data.lifetime.all.properties.kills, inline: true},
                { name: 'Assists', value: data.lifetime.all.properties.assists, inline: true},
                { name: 'Deaths', value: data.lifetime.all.properties.deaths, inline: true},
                { name: 'Best Kill Streak', value: data.lifetime.all.properties.bestKillStreak},
                {name: 'Total Time Played', value: (parseFloat(data.lifetime.all.properties.timePlayedTotal / 3600).toFixed(2)) + " Hours"}
            
            )
            message.channel.send(embed);
 
            //I left the console.log so you can see the reponse we are getting. You can delete this if you wish.
            console.log(data);
 
        }catch(error){
            message.channel.send('There was an error fetching this player');
            throw error;
        }
    }
}