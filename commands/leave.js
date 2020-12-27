module.exports = {
    name: 'leave',
    description: 'Leaving Room',
   async execute (message) {
        const voiceChannel = message.member.voice.channel;
       if (!voiceChannel) return  message.channel.send('You Need To Be Here To Stop Me!');
       await voiceChannel.leave();
       await message.channel.send('Bye Byeeee !!')

    }
};