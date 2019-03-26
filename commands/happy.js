const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
	name: 'happy',
	description: 'Sends a picture that represents happiness',
	aliases: ['smile', 'yay'],
	execute(message) {
        const dir = './happy';
        fs.readdir(dir, (err, files) => {
            const random = Math.ceil(Math.random() * files.length);
            console.log(random);

            const happyEmbed = new Discord.RichEmbed()
            .setTitle('Happy!')
            .attachFiles([`happy/${random}.gif`])
            .setImage(`attachment://${random}.gif`)
            .setDescription('Happiness is the cure to everything!');

		    message.channel.send(happyEmbed);
        });
        
	},
};