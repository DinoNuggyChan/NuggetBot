
const Discord = require('discord.js');
const client = new Discord.Client();
const Statcord = require("statcord.js");
const config = require("../config.json");

const statcord = new Statcord.Client({
    client,
    key: "statcord.com-",
    postCpuStatistics: true,
    postMemStatistics: true, 
    postNetworkStatistics: true, 
  });
   
  client.on("ready", async () => {
    console.log("ready");
     //Start auto posting
    statcord.autopost();
  });
//--------------------------------------------------------------------
statcord.on("autopost-start", () => {
  console.log("Statcord Started autopost");
});

statcord.on("post", status => {
  if (!status) console.log("Statcord Post Complete");
  else console.error(status);
});

client.login(config.token);
