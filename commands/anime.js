

module.exports = {
    name: 'Extra Commands List',
    description: 'Extra Commands List',
    async execute(client, message, args, command) {

      return message.channel.send({
          embed:{
              title: 'Anime Commands List',
              color: '#FFE082', 
              fields:[
                  {
                    name: '`n.search`',
                    value: 'Search for an Anime and get the Download link and a "Watch Now" Link'
                },
                {
                    name: '`n.random-anime`',
                    value: 'Send Random Image from a Anime'
                }
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