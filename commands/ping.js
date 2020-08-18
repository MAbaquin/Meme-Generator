module.exports =
{
    names: ['ping','p'],
    description: "The bot will say 'hi!' if it's awake",
    execute(message, args) {
        message.channel.send('hi!')
    }
}