require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const commandHandler = require('./commandHandler.js');

client.commands = new discord.Collection();
commandHandler.init(client);

client.on('ready', () => {
    client.user.setActivity('The Dankest of Memes | Wake Word: .mmg', { type: "WATCHING" });
    console.log('Meme Generator is live and ready to roll!');
});

client.on('message', message => commandHandler.handle(message));

client.login(process.env.TOKEN);