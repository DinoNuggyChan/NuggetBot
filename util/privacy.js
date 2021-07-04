const config = require("../config.json");
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {

      return message.channel.send({
          embed:{
              title: 'Bot Privacy Policy',
              color: '#FFE082', 
              fields:[
                  {
                      name: 'Data We Collect',
                      value: '\u200b',
                  },
                  {
                      name: 'User IP',
                      value: 'user ip\'s are stored by cloudflare when our website is viewed',
                  },
                {
                    name: 'Dev Team',
                    value: `Main Dev/Coder <@${config.owner1}> , Website Dev <@${config.owner3}> , Gif/Image Finder <@${config.owner2}>`,
                },
                {
                    name: 'basic dev info ',
                    value: '[Website](https://www.nuggetbot.xyz/), [Github](https://github.com/Oni-Chan-inc/NuggetBot), [invite](https://discord.com/oauth2/authorize?client_id=810614472607137803&scope=bot&permissions=1074129926), [Support Server](https://discord.gg/UJ6eTFkadu)'
                },
              ],
            timestamp: new Date(),
              footer: {
                  text: 'Thank you to everyone that Adds .Nugget Bot~ ♡ to there server',
                  icon_url: 'https://images-ext-2.discordapp.net/external/IzRTu6S6FtvUn-RXgSWKpqet1HlXMCEKYAOZ8BwVmgY/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/810614472607137803/b612562c90d89bdfefb758932cd64e39.webp?width=794&height=794',
              }
          }
        });
    }
  }