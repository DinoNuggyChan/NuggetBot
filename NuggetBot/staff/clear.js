module.exports = {
    name: 'clear',
    permission: ['MANAGE_MESSAGES'],
    description: "Clear",
    async execute(client, message, args, command) {
        if (!message.member.guild.me.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send("i do not have `MANAGE_MESSAGES` Perms");
        if (!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send("You need `ADMINISTRATOR` or `MANAGE_MESSAGES` perms to use this command.");

        if(!args[0]) return message.reply('Please enter the amount of messages you want to clear')
        if(isNaN(args[0])) return message.reply("please enter a real number")

        if(args[0] > 100) return message.reply("You cannot delete more than **100** messages")
        if (args[0] < 1) return message.reply("You must delete at least one message")

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            return message.channel.bulkDelete(messages)
        })
        .catch(err => message.reply(`You can only bulk delete messages that are under 14 days old.`));
        
    }
}