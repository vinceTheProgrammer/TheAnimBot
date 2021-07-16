const { CommandoClient } = require('discord.js-commando');
const cronJobs = require('./jobs/cronjobs.js');
const path = require('path');

require('dotenv').config();

let { token } = process.env.TOKEN;

const client = new CommandoClient({
	commandPrefix: 'a!',
	owner: '279744002599682048',
	//invite: 'https://discord.gg/bRCvFy9',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['main', 'Main Commands'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with Commando');
    cronJobs.execute(client);
});

client.on('error', console.error);

client.login(token);