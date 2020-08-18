var commands = [];
var uniqueCommands = [];
var fs = require('fs');
var commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
var client;

function parse(prefix, message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    args = splitMessage(message);
    command = args[1].toLowerCase();
    handleCommand(command, message, args);
}

function handleCommand(command, message, args) {
    if (commands.includes(command)) {
        if (command == 'help' || command == 'h') {
            args = uniqueCommands;
        }
        client.commands.get(command).execute(message, args);
    }
}

function init(discordClient) {
    client = discordClient;
    loadCommands();
}

function loadCommands() {
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

function splitMessage(message) {
    var args = message.content.match(/[\.]*\w+|"[^"]+"/g);
    for (var index = 0; index < args.length; index++) {
        var arg = args[index]
        if (arg.startsWith('"')) {
            args[index] = arg.substring(1, arg.length - 1);
        }
    }
    return args;
}

module.exports =
{
    init: init,
    parse: parse
}
