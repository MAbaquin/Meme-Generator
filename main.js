require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const handler = require('./commandHandler.js');

const prefix = '.mmg';
client.commands = new discord.Collection();

handler.init(client);
client.on('message', message => handler.parse(prefix, message));

client.login(process.env.TOKEN);