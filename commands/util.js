

module.exports = {
    name: 'util Commands List',
    description: 'util Commands List',
    async execute(client, message, args, command) {

      return message.channel.send({
          embed:{
              title: 'util Commands List',
              color: '#FFE082', 
              fields:[
                  {
                    name: '`n.steal-emoji` \ `n.add`',
                    value: 'Send emoji after command to add it to your server example (n.steal-emoji <emoji>)'
                },
                {
                    name: '`n.emoji`',
                    value: 'Sends Emoji enlarged and The ID example (n.emoji <emoji>)'
                },
                {
                    name: 'User/Server Related Below',
                    value: '`n.avatar` , `n.userinfo` , `n.serverinfo`'
                },
                {
                    name: 'Bot Related Below',
                    value: '`n.vote` , `n.supportserver` , `n.website` , `n.github` , `n.invite`'
                },
                {
                    name: 'Other Below',
                    value: '`n.translate`'
                },
                
              ],
              image: {
                url: 'https://images-ext-1.discordapp.net/external/W7AuWFnJxYMdZKizdJS1fDIlWe9QmvGPo2Qte0io8S4/%3Fwidth%3D474%26height%3D474/https/media.discordapp.net/attachments/816905273322766369/828393978651082793/d.png',
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