module.exports = {
    name: 'help',
    description: "umm... basically what's happening right now",
    execute(message, args) {
        var commandString = "";
        for (var arg of args.values()) {
            commandString += `${arg.name}: ${arg.description}\n`; 
        }
        message.author.send(`list of commands:\n${commandString}\nMake sure you have quotations around the content like so: "Content for this meme"`);
    }
}