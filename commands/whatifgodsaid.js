module.exports = {
    name: "whatifgodsaid",
    async execute(painter, message, args) {
        message.channel.send('debugging');
        var imageString = "https://memestorage1.blob.core.windows.net/meme-template/whatifgodsaid.png";
        var contents = getTextLines(args);
        var image = painter.generateImage(imageString, 500, 522, contents);
        message.channel.send({ files: [await image] });
    }
}

function getTextLines(args) {
    var textLine = new TextArea.TextArea();
    textLine.content = args[2];
    textLine.x = 378;
    textLine.y = 392;
    textLine.width = 248;
    textLine.size = 32;
    return [textLine];
}