const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../functions.js");
module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {

        const member = getMember(message, args.join(" "));

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new Discord.MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL({dynamic: true}))
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField("Username", `${member.user.tag}`)
            .addField("User ID", `${member.user.id}`)
            .addField("Account Creation", `${created}`)

            .setImage(member.user.displayAvatarURL({dynamic: true}))

            if (member.user.presence.game) 
            embed.addField('Currently playing', stripIndents`**> Name:** ${member.user.presence.game.name}`)

            .setTimestamp()

        return message.channel.send(embed);
        
    }
}