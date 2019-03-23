module.exports = {
	name: 'args-info',
	description: 'Returns argument information in array format',
	args: true,
	usage: '<list>',
	execute(message, args) {
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	},
};