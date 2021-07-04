module.exports = {
    name: '.',
    aliases: [],
    description: ".",
    async execute(client, message, args, command, Discord) {

        const user = message.author;

        message.channel.send([
            `**Heres Some News for you <@${user.id}>**`,
            `https://www.theraleighregister.com/microsoft-discord-2021.html`

        ]);
    }
}