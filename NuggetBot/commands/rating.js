
module.exports = {
    name: 'Rating',
    description: 'Rating Commands List',
    async execute(client, message, args, command) {

      return message.channel.send({
          embed:{
              title: 'Rating Commands List',
              color: '#FFE082', 
              fields:[
                  {
                      name: 'List Below',
                      value: '`n.simprate` , `n.sexyrate` , `n.stankrate` , `n.swagrate` , `n.pograte` , `n.pp`'
                  }
              ],
              image: {
                url: 'https://media.discordapp.net/attachments/816905273322766369/828393757081600000/b.png',
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