module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    async execute(client, message, args, command){

        if (!message.member.guild.me.hasPermission("BAN_MEMBERS", "ADMINISTRATOR")) return message.channel.send("i do not have `BAN_MEMBERS` Perms");
        if (!message.member.hasPermission("BAN_MEMBERS", "ADMINISTRATOR")) return message.channel.send("You need `ADMINISTRATOR` or `BAN_MEMBERS` perms to use this command.");

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(`**<@${target.id}> has been banned**`)
        }else{

        }

    }
}