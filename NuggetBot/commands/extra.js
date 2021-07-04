

module.exports = {
    name: 'Extra Commands List',
    description: 'Extra Commands List',
    async execute(client, message, args, command) {

      return message.channel.send({
          embed:{
              title: 'Extra Commands List',
              color: '#FFE082', 
              fields:[
                  {
                    name: 'List Below',
                    value: '`n.text-art` , `n.shrek` , `n.joker` , `n.spongebob` , `n.spongebob2` , `n.magic` , `n.news` , `n.quotes` , `n.owoify` , `n.ship`'
                },
                {
                  name: 'truth or  Dare',
                  value: '`n.truth` / `n.t` (68 Possible Replys)  ,  `n.dare` / `n.d` (11 Possible Replys its hard to come up with stuff for discord lol)'
                }
              ],
              image: {
                url: 'https://images-ext-2.discordapp.net/external/uHTe1DkLuwc9Z-myXVM-WZvDHp0HpfMJuJq_xW1m9XY/https/media.discordapp.net/attachments/816905273322766369/828394148301635604/f.png',
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