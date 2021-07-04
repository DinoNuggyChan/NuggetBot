const Statcord = require("statcord.js");
const config = require('../config.json'); 
const Discord = require('discord.js');

module.exports = async (client, message) => {
    
    const statcord = new Statcord.Client({
        client,
        key: "statcord.com-",
        postCpuStatistics: true,
        postMemStatistics: true, 
        postNetworkStatistics: true, 
    });
    
    //--------------------------------------------------------------------
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
   //--------------------------------------------------------------------
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //--------------------------------------------------------------------
    const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command));
    statcord.postCommand(command, message.author.id);
    if(cmd) cmd.execute(client, message, args, command, Discord);
    statcord.post();
};