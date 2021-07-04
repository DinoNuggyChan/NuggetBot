const { AutoPoster } = require('topgg-autoposter')
const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require("fs");
const Enmap = require("enmap");

client.aliases = new Discord.Collection
const config = require("./config.json");
client.config = config;

client.commands = new Enmap();

console.log("------------------------------------------------");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error;
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split(".")[0];
    console.log(`Loaded event '${evtName}'`);
    client.on(evtName, evt.bind(null, client));
  });
  console.log("~~~~Events Folder Loaded~~~~");
});

fs.readdir("./commands/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded Command '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~Commands Folder Loaded~~~~");
});

fs.readdir("./stats/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./stats/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded stats '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~stats Folder Loaded~~~~");
});
fs.readdir("./actions/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./actions/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded actions '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~Actions Commands Folder Loaded~~~~");
});
fs.readdir("./nsfw/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./nsfw/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded nsfw '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~NSFW Commands Folder Loaded~~~~");
});
fs.readdir("./util/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./util/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded util '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~Util Commands Folder Loaded~~~~");
});
fs.readdir("./rating/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./rating/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded rating '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~Rating Commands Folder Loaded~~~~");
});
fs.readdir("./extra/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./extra/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded extra '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~Extra Commands Folder Loaded~~~~");
});
fs.readdir("./reddit/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./reddit/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded reddit '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~reddit Folder Loaded~~~~");
});
fs.readdir("./image/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./image/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded reddit '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~image Folder Loaded~~~~");
});
fs.readdir("./anime/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./anime/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded anime '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~anime Folder Loaded~~~~");
});
fs.readdir("./staff/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./staff/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded staff '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~staff Folder Loaded~~~~");
});
fs.readdir("./animal/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./animal/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded animal '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~animal Folder Loaded~~~~");
});


fs.readdir("./A-Reactions/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./A-Reactions/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded A-Reactions '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~A-Reactions Folder Loaded~~~~");
});
fs.readdir("./webhooks/", async (err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./webhooks/${file}`);
    let cmdName = file.split(".")[0];
    console.log(`Loaded webhooks '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
  console.log("~~~~webhooks Folder Loaded~~~~");
});
//--------------------------------------------------------------------

process.on("unhandledRejection", (error) => {
  console.error("Unhandled promise rejection:", error);
});

client.on("message", message => {
  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  if (message.content.includes("810614472607137803")) {
    return message.channel.send(`**Hello i'm <@810614472607137803> i see you have pinged me here's some basic info**`, {
        embed:{
            title: 'INFO',
            color: '#FFE082', 
            description: "Prefix is `n.`",
            fields:[
                {
                    name: '**n.help**',
                    value: 'Will List info Commands like `n.actions` which sends all the Actions Commands'
                },     
                {
                    name: 'Utils',
                    value: '`n.supportserver`, `n.devinfo`,  `n.invite`, `n.github`, `n.vote`'
                },
                {
                  name: '**Main Coder**',
                  value: `<@${config.owner1}>`,
              },
              {
                name: '**Gif/Command Helper**',
                value: `<@${config.owner2}>`,
              },
              {
                name: '**Website/Code Helper**',
                value: `<@${config.owner3}>`,
              } 
            ],
    
            footer: {
                text: 'Thank you to everyone that Adds .Nugget Bot~ ♡ to there server'
            }
        }
      });
  };
});

//--------------------------------------------------------------------

const ap = AutoPoster(`${config.topgg}`, client)


ap.on('posted', () => {
  console.log(`Top.gg Server Count Posted **(Server Count> ${client.guilds.cache.size + 1})**`);
})
//--------------------------------------------------------------------
client.login(config.token);
