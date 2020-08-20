const config = require('./config.js');
var fileSystem = require('fs');

var commands = [];
var uniqueCommands = [];
var client;

function handle(message) {
    if (!message.content.startsWith(config.command.prefix) || message.author.bot) return;

    var args = message.content.slice(config.command.prefix.length + 1).split(/ +/);
    const command = args.shift().toLowerCase();
    const emptyCommand = (command == null || command.length <= 0);

    if (emptyCommand || ['help', 'h'].includes(command)) {
        args = uniqueCommands;
    }

    if (commands.includes(command)) {
        client.commands.get(command).execute(message, args);
    }
    else {
        client.commands.get('help').execute(message, args);
    }
}

function init(discordClient) {
    client = discordClient;
    loadCommands();
}

function loadCommands() {
    const commandFiles = fileSystem.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for (var file of commandFiles) {
        var command = require(`./commands/${file}`);
        uniqueCommands.push(command);

        for (var index = 0; index < command.names.length; index++) {
            var name = command.names[index];
            commands.push(name);
            client.commands.set(name, command);
        }
    }
}

module.exports = {
    init: init,
    handle: handle
}
