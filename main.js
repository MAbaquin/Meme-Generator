require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const handler = require('./commandHandler.js');

const prefix = '.mmg';
client.commands = new discord.Collection();

handler.init(client);
client.on('ready', () => client.user.setActivity('The Dankest of Memes', { type: 'WATCHING' }))
client.on('message', message => handler.parse(prefix, message));

client.login(process.env.TOKEN);