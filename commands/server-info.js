module.exports = {
	name: 'server-info',
        description: 'Returns server information',
	execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated at: ${message.guild.createdAt}\nServer region: ${message.guild.region}`);
	},
};