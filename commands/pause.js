module.exports = {
    name: 'pause',
    description: 'pause all songs in the queue!',
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voice.channel) return message.channel.send('You have to be in a voice channel to stop the music!');
        serverQueue.connection.dispatcher.pause();
        // if (serverQueue.connection.dispatcher.pause){
        //     message.channel.send('Your Music Paused');
        // } else{
        //     message.channel.send('There is no song playing Right Now');
        // }
    },
};