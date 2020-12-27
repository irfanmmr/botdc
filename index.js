require("dotenv").config();
const fs = require('fs');
const Discord = require('discord.js');
const {prefix} = require('./config.json');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
       client.commands.get('ping').execute(message);

    } else if (command === 'beep') {
        client.commands.get('beep').execute(message);

    } else if (command === 'server') {
        client.commands.get('server').execute(message);

    } else if (command === 'user-info') {
        client.commands.get('user-info').execute(message);

    } else if (command === 'info') {
        client.commands.get('info').execute(message);

    } else if (command === 'kick') {
        client.commands.get('kick').execute(message);

    } else if (command === 'avatar') {
        client.commands.get('avatar').execute(message);

    } else if (command === 'prune') {
        client.commands.get('prune').execute(message, args);

    } else if (command === 'play'){
        client.commands.get('play').execute(message, args);

    } else if (command === 'leave'){
        client.commands.get('leave').execute(message, args);

    }

});






client.login(process.env.BOTTOKEN);