const config = require("../config.json");

module.exports = (client) => {
  console.log(`${client.user.tag} is Now Online/Updated`)

  const messages = [
    `${client.guilds.cache.size + 1} Servers | n.help | n.vote`,
    `111 Commands |  n.vote`,
    `${client.guilds.cache.size + 1} Servers | n.help | n.vote`,
    `111 Commands |  n.vote`,
    `${client.guilds.cache.size + 1} Servers | n.help | n.vote`,
    `111 Commands |  n.vote`,
    `${client.guilds.cache.size + 1} Servers | n.help | n.vote`,
  ];
      
  setInterval(() => {
    const index = messages[Math.floor(Math.random() * messages.length)];
    
    client.user.setPresence({
      status: 'idle',
      activity: {
        name: `${index}`,
        type: 'WATCHING',
      }
    });
  }, 8000);
}