require( 'dotenv' ).config();

const Discord = require( 'discord.js' );
const client = new Discord.Client();

const fs = require( 'fs' );

const _PREFIX = '!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync( './commands/' ).filter(file => file.endsWith( '.js' ));
for( const file of commandFiles ) {
    const commands = require( `./commands/${file}` );

    client.commands.set( commands.name, commands );
}

client.once('ready', () => {
	console.log( 'Ready!' );
});

client.on('message', message => {
    if (!message.content.startsWith( _PREFIX ) || message.author.bot) return;

    const args = message.content.slice(1).trim().split(' ');
    const command = args.shift().toLowerCase();

    if ( command === 'ping' ) {
	// send back "Pong." to the channel the message was sent in
        client.commands.get( 'ping' ).execute(message, args);
    }

    if ( command === 'help' ) {
        message.channel.send(`help ${args}`);
    }
});

client.login(process.env.DISCORD_TOKEN);
