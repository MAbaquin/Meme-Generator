module.exports = {
    names: ['help','h'],
    description: "umm... basically what's happening right now",
    execute(message, args) {
        var commandString = "";
        for (var command of args) {
            commandString += `${command.names}: ${command.description}\n`; 
        }
        message.author.send(`list of commands:\n${commandString}\nMake sure you have quotations around the content like so: "Content for this meme"`);
    }
}