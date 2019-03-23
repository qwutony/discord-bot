module.exports = {
	name: 'avatar',
    description: 'Displays avatars of self or other users',
    alias: ['icon', 'dp'],
    usage: '<username(s)>',
	execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
        }
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
        });
        message.channel.send(avatarList);
	},
};