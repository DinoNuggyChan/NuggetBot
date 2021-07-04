module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {


      return message.channel.send({
          embed:{
              title: 'Game Stat Commands',
              color: '#FFE082', 
              fields:[
                  {
                    name: '**Platforms**',
                    value: '\u200B'
                },
                {
                    name: '**Only For COD commands**',
                    value: 'psn = PlayStation / steam = Steam / battle = BattleNET / xbl = XBOX / acti = Activision ID'
                },
                {
                    name: '\u200B',
                    value: '\u200B'
                },
                {
                    name: '`n.cw-stats`',
                    value: 'Sends Stats from **Cold War** user provided (example: `n.cw-stats MrDerpyPanda_YT psn`)',
                    inline: true
                },
                {
                    name: '`n.wz-stats`',
                    value: 'Sends Stats from **Warzone user** provided (example: `n.wz-stats MrDerpyPanda_YT psn`)',
                    inline: true
                },
                {
                    name: '`n.mw-stats`',
                    value: 'Sends Stats from **Modern Warfare** user provided (example: `n.mw-stats MrDerpyPanda_YT psn`)',
                    inline: true
                },
                {
                    name: '\u200B',
                    value: '\u200B'
                },
                {
                    name: '`n.fortnite-stats / n.fn-stats`',
                    value: 'Sends Stats from **Fortnite** user provided (example: `n.fn-stats Russian-Nugget`)'
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