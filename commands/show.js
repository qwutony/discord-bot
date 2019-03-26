const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
	name: 'show',
	description: 'Sends a picture that represents happiness',
	execute(message, args) {
        const dir = `./${args[0]}`;
        fs.readdir(dir, (err, files) => {
            const random = Math.ceil(Math.random() * files.length);
            console.log(random);

            const showEmbed = new Discord.RichEmbed()
                .setTitle(`Show ${args[0]}!`)
                .attachFiles([`pics/${args[0]}/${random}.gif`])
                .setImage(`attachment://${random}.gif`)
                .setDescription('Happiness is the cure to everything!');
            message.channel.send(showEmbed);
        });
	},
};