const discord = require('discord.js');
const client = new discord.Client();
const handler = require('./commandHandler.js');

const prefix = '.mmg';
client.commands = new discord.Collection();

handler.init(client);
client.on('message', message => handler.parse(prefix, message));

client.login('NzQ0NTQzNDczNjMzMzI5MTky.XzkwJQ.hLQ2iczy4pr0pWeIIjtSCftua5Q');