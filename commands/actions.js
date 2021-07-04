module.exports = {
    name: 'roleplay/actions',
	aliases: ['roleplay'],
    description: 'Action/Roleplay Command\'s',
    async execute(client, message, args, command) {

        

      return message.channel.send({
          embed:{
              title: 'Action/Roleplay Command\'s',
              color: '#FFE082', 
              fields:[
                  {
                      name: '**Below are commands that you can mention users in**',
                      value: '`n.boop` `n.hug` `n.cuddle` `n.kiss` `n.kill` `n.highfive` `n.punch` `n.kicked` `n.bonk` `n.slap` `n.pat` `n.nom` `n.stab` `n.nuzzle` `n.poke`'
                  },     
                  {
                      name: '**Below are commands that you cant mention users in**',
                      value: '`n.cry` `n.mad` `n.dance` `n.blush` `n.pout` `n.scared` `n.run` `n.shy` `n.eating` `n.facepalm` `n.smug`'
                  },
                  {
                    name: '**Below are commands that work with or without user mention**',
                    value: '`n.clapping` `n.laugh` '
                }
              ],
              image: {
                url: 'https://images-ext-1.discordapp.net/external/7QKCWdDE5VC3yIMzOS8jGqMO39glp4kuPvGVoVqxeWs/https/media.discordapp.net/attachments/816905273322766369/828394075471872040/e.png',
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