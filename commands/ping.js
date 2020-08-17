module.exports =
{
    name: 'ping',
    execute(painter, message, args) {
        message.channel.send('hi!')
    }
}