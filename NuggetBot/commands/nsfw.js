

module.exports = {
    name: 'nsfw',
    description: 'NSFW Command\'s',
    async execute(client, message, args, command) {

        if (message.channel.nsfw) {

        } else {
            message.channel.send("This channel is SFW.");
        return;}
        
      return message.channel.send({
          embed:{
              title: 'NSFW Command\'s',
              color: '#FFE082', 
              fields:[
                  {
                      name: '**Below are commands that you can mention users in**',
                      value: '`n.eatout` `n.fuck` `n.suck` `n.threesome` `n.lesbian-sex`'
                  },     
                  {
                      name: '**Below are commands that are Hentai**',
                      value: '`n.boobs` , `n.hentai` , `n.hentai-thighs` , `n.hentai-ass` , `n.neko-pussy` , `n.masturebate` , `n.lewd` , `n.hentaivideo` , `n.trap` , `n.random-hentai` , `n.gelbooru / gb (example: n.gelbroou sex)` , `n.konachan / kc (example: n.konachan sex)` , `n.rule34 / n.r34 (n.rule34 sex)` , `n.hentaibomb / n.hb (n.hentaibomb sex)` , `n.apex-hentai`'
                  },
                  {
                    name: '**Below are commands that are IRL**',
                    value: '`n.ass` , `n.thighs` , `n.boobsirl` , `n.lesbianirl` , `n.pussy` , `n.pornirl` , `n.porngif`'
                },
                {
                    name: '**Below are commands the Random commands**',
                    value: '`n.ascii-nsfw`'
                }
              ],
              image: {
                url: 'https://images-ext-1.discordapp.net/external/tzGvhaT-v5TVP50Ar09XRJ77ul4g7m0BiNAFbER6naE/%3Fwidth%3D507%26height%3D474/https/media.discordapp.net/attachments/816905273322766369/828393659459174460/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.png',
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