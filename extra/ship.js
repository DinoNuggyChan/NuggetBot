const Canvas = require('canvas')
module.exports = {
  name: 'ship',
  description: ".",
  async execute(client, message, args, command, Discord) {
        //-- Compatibility Percentage Ship --// 

        const rating = Math.floor(Math.random() * 100) + 1;
        //--
        //-- image --// 

        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./files/background.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

       let member = message.mentions.users.first()
        const avatar1 = await Canvas.loadImage(message.author.displayAvatarURL ({ format: 'jpg' }));
        //ctx.drawImage(avatar, 125, 125, 100, 0, Math.PI * 2, true);
        ctx.drawImage(avatar1, 25, 25, 200, 200);

        const avatar2 = await Canvas.loadImage(member.displayAvatarURL ({ format: 'jpg' }));
        //ctx.drawImage(avatar, 125, 125, 100, 0, Math.PI * 2, true);
        ctx.drawImage(avatar2, 475, 25, 200, 200);

        const plus = await Canvas.loadImage(`./files/plus.png`);
        //ctx.drawImage(avatar, 125, 125, 100, 0, Math.PI * 2, true);
        ctx.drawImage(plus, 270, 40, 160, 160);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'example.png');
        //--

        const ship = new Discord.MessageEmbed()
          .setColor('#F7E6EF')
          .addField(`compatibility ship`, `${message.author.username} & ${member.username} are **${rating}% compatible**`)
          .attachFiles(attachment)
          .setImage('attachment://example.png');

           return message.channel.send(ship)

      }
    }