

module.exports = {
    name: 'Reddit Commands List',
    description: 'Reddit Commands List',
    async execute(client, message, args, command) {

      return message.channel.send({
          embed:{
              title: 'Reddit Commands List',
              color: '#FFE082', 
              fields:[
                  {
                    name: '`n.reddit-search`',
                    value: 'Sends a Random image from Reddit user provides (NSFW Marked Reddits Dont not work)'
                },
                {
                    name: '`n.meme`',
                    value: 'Sends a Random image from r/meme, r/dankmeme, r/me_irl, r/funny, r/PhotoshopBattles'
                },
                {
                    name: '`n.art`',
                    value: 'Sends a Random image from r/Art, r/drawing, r/AnimeSketch, r/characterdrawing, r/sketches'
                },
                {
                    name: '`n.food`',
                    value: 'Sends a Random image from r/food, r/foodporn, r/cooking'
                },
                {
                    name: '`n.cats`',
                    value: 'Sends a Random image from r/cats, r/cat, r/kittens'
                },
                {
                    name: '`n.cute`',
                    value: 'Sends a Random image from r/cute, r/aww, r/kittend, r/puppy, r/Animals'
                }
              ],
              image: {
                url: 'https://images-ext-1.discordapp.net/external/Et50avdQNf6fMbDly3fi_T53eWdElNhU0lUoNFgarRI/https/media.discordapp.net/attachments/816905273322766369/828393905174609952/c.png',
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