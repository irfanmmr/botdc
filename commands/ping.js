module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message) {
        const {Client} = require("discord.js");const client = new Client
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);

    },
};