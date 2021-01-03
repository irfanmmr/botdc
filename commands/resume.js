module.exports = {
    name: 'resume',
    description: 'resume all songs in the queue!',
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voice.channel) return message.channel.send('You have to be in a voice channel to stop the music!');
        serverQueue.connection.dispatcher.resume();
        //
        // if (serverQueue.connection.dispatcher.resume){
        //     message.channel.send('Your Music Resume');
        // } else{
        //     message.channel.send('There is no song playing Right Now');
        // }
    },
};