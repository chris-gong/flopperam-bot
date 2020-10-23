module.exports ={
    name: 'ping',
    description: "<prefix>ping",
    execute( message, name ) {
        message.channel.send( 'pong!' );
    }
}