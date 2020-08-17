var TextArea = "./../models/textarea.js"

module.exports = {
    name: "thatsafact",
    async execute(painter, message, args) {
        var imageString = "https://memestorage1.blob.core.windows.net/meme-template/thatsafact.png";
        var contents = getTextLines(args);
        var image = painter.generateImage(imageString, 319, 247, contents);
        message.channel.send({ files: [await image] });
    }
}

function getTextLines(args) {
    var textLine = new TextArea.TextArea();
    textLine.content = args[2];
    textLine.x = 231;
    textLine.y = 90;
    textLine.width = 155;
    return [textLine];
}