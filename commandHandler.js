const commands = ['ping'];
var fs = require('fs');
var commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
var client;

function parse(prefix, message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    args = message.content.split('"');
    command = message.content.split(/ +/)[1].toLowerCase();
    handleCommand(command, message, args);
}

function handleCommand(command, message, args) {
    if (commands.includes(command)) {
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
        client.commands.set(command.name, command);
    }
}

module.exports =
{
    init: init,
    parse: parse
}
