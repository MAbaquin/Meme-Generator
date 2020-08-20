const configs = require('../config.js');

module.exports = {
    names: ['help','h'],
    description: "umm... basically what's happening right now",
    execute(message, args) {
        var outputMessage = 'Hey, it look\'s like you need some help!\n\n';

        outputMessage += `> List of commands following \`${configs.command.prefix}:\`\n`;

        for (var command of args) {
            outputMessage += `> - **${command.names.join(', ')}**: ${command.description}\n`;
        }

        outputMessage += '\nExample: \`/mmg thatsafact beans\`';

        message.channel.send(outputMessage);
    }
}