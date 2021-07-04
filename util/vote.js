module.exports = {
  name: '.',
  aliases: [],
  description: ".",
  async execute(client, message, args, command, Discord) {

      return message.channel.send({
          embed:{
              title: 'Voting Websites',
              color: '#FFE082', 
              author: {
                name: '.Nugget Bot~ ♡',
                icon_url: 'https://images-ext-2.discordapp.net/external/IzRTu6S6FtvUn-RXgSWKpqet1HlXMCEKYAOZ8BwVmgY/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/810614472607137803/b612562c90d89bdfefb758932cd64e39.webp?width=794&height=794',
              },
              fields:[
                  {
                      name: 'Top.gg Votes help our bot grow the most',
                      value: '[Click here](https://top.gg/bot/810614472607137803/vote)'
                  },
                  {
                    name: '\u200b',
                    value: '**More Voting Websites Below**',
                    inline: false,
                  },
                  {
                    name: "*Discord.boats*",
                    value: "[Click Here](https://discord.boats/bot/810614472607137803/vote)",
                    inline: true
                  },
                  {
                    name: "*Discordbotlist.com*",
                    value: "[Click Here](https://discordbotlist.com/bots/nuggets-bot/upvote)",
                    inline: true
                  },
                  {
                    name: "*Discordlist.space*",
                    value: "[Click Here](https://discordlist.space/bot/810614472607137803/upvote)",
                    inline: true
                  },
              ],
            timestamp: new Date(),
            footer: {
              text: 'Thank you to everyone who adds .Nugget Bot~ ♡ to their server',
              icon_url: 'https://images-ext-2.discordapp.net/external/IzRTu6S6FtvUn-RXgSWKpqet1HlXMCEKYAOZ8BwVmgY/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/810614472607137803/b612562c90d89bdfefb758932cd64e39.webp?width=794&height=794',
          }
          }
        });
    }
  }