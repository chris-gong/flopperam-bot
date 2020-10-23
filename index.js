require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice(1).trim().split(' ');
    const command = args.shift().toLowerCase();
	if (command === 'help') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send(`help ${args}`);
    }
});

client.login(process.env.DISCORD_TOKEN);