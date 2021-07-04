

module.exports = {
    name: 'image Commands List',
    description: 'image Commands List',
    async execute(client, message, args, command) {

      return message.channel.send({
          embed:{
              title: 'image Commands List',
              color: '#FFE082', 
              fields:[
                  {
                    name: '`n.matching`',
                    value: 'Send\'s Matching PFP non-animated'
                },
                {
                    name: '`n.a-matching`',
                    value: 'Send\'s Matching PFP animated'
                },
                {
                    name: '`n.pfp`',
                    value: 'Send\'s non-Matching PFP non-Animated'
                }
              ],
              image: {
                url: 'https://images-ext-1.discordapp.net/external/p4Hlj4Ok7KjO0sTa_XUpDmC6ENm6hHk14VaWWJB_af4/https/media.discordapp.net/attachments/816905273322766369/828394288152838154/pp.png',
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