const Discord = require('discord.js');

module.exports = {
	name: 'happy',
	description: 'Sends a picture that represents happiness',
	aliases: ['smile', 'yay'],
	execute(message) {
        const happyEmbed = new Discord.RichEmbed()
            .setTitle('Happy!')
            .setThumbnail('https://i.pinimg.com/originals/14/7b/ba/147bba012d5781ead622f9c2a4a02be2.gif')
            .setDescription('Happiness is the cure to everything!');

		message.channel.send(happyEmbed);
	},
};