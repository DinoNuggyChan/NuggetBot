module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    async execute(client, message, args, command){
        if (!message.member.guild.me.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) return message.channel.send("i do not have `KICK_MEMBERS` Perms");
        if (!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) return message.channel.send("You need `ADMINISTRATOR` or `KICK_MEMBERS` perms to use this command.");

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            return message.channel.send(`**<@${target.id}> has been kicked**`)
        }else{
            return message.channel.send(`**You either didn't mention someone or that user cannot be kicked!**`)
        }
    }
}