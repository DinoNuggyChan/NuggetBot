

module.exports = {
    name: 'Commands List',
    description: 'Commands List',
    async execute(client, message, args, command) {


      return message.channel.send({
          embed:{
              title: 'Commands List',
              color: '#FFE082', 
              fields:[
                {
                    name: '`n.util`',
                    value: 'Sends a list of the Util commands',
                    inline: true
                },
                {
                    name: '`n.image`',
                    value: 'Sends a list of the Image commands',
                    inline: true
                },
                {
                    name: '`n.anime`',
                    value: 'Sends a list of the anime commands',
                    inline: true
                },
                {
                    name: '`n.staff`',
                    value: 'Sends a list of the staff commands',
                    inline: true
                },
                {
                    name: '`n.extra`',
                    value: 'Sends a list of the extra/random commands',
                    inline: true
                },
                {
                    name: 'basic info',
                    value: '[Website](https://www.nuggetbot.xyz/), [Github](https://github.com/Oni-Chan-inc/NuggetBot), [invite](https://discord.com/oauth2/authorize?client_id=810614472607137803&scope=bot&permissions=1074129926), [Support Server](https://discord.gg/UJ6eTFkadu), [See Bot Stats](https://www.nuggetbot.xyz/stats.html), [Support Dev\'s](https://www.buymeacoffee.com/nuggetbot), [dev\'s personal server](https://discord.gg/EuhpdZxm57)'
                },
              ],
              image: {
                url: 'https://images-ext-2.discordapp.net/external/A8vWayrOoWkMFXYG3_4N3zb09QTHfQC2bJK3iAa6Fq8/%3Fwidth%3D504%26height%3D474/https/media.discordapp.net/attachments/816905273322766369/828391455071404082/Studio_Project-removebg-preview.png',
            },
            timestamp: new Date(),
              footer: {
                  text: 'Thank you to everyone that Adds .Nugget Bot~ ♡ to there server',
                  icon_url: 'https://images-ext-2.discordapp.net/external/IzRTu6S6FtvUn-RXgSWKpqet1HlXMCEKYAOZ8BwVmgY/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/810614472607137803/b612562c90d89bdfefb758932cd64e39.webp?width=794&height=794',
              }
          }
        });
    }
  }