const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Play Music',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('Come Here!! Let`s Play');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return message.channel.send('I Cant Come In :(');
        if (!permissions.has("SPEAK")) return message.channel.send('I Cant Say Anything :(');
        if (!args.length) return message.channel.send('You Need More');

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }

        const video = await videoFinder(args.join(' '));

        if (video){
            const stream = ytdl(video.url, {filter: "audioonly"});
            connection.play(stream, {seek: 0, volume: 1})
                .on('finish', () =>{
                    voiceChannel.leave();
                } );

            await message.reply(`Now Playing ***${video.title}***`)
        } else {
            message.channel.send('I Dont Know, I never Hear That.')
        }

    }
};