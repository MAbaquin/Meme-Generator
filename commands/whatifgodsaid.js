var Painter = require("./../painter.js");
var TextArea = require("./../models/textarea.js");

module.exports = {
    name: "whatifgodsaid",
    description: "What if you wanted to go to heaven but god said [CONTENT]",
    async execute(message, args) {
        var imageString = "https://memestorage1.blob.core.windows.net/meme-template/whatifgodsaid.png";
        var contents = [new TextArea.TextArea({
            content: args[2],
            x: 378,
            y: 392,
            width: 248,
            size: 32
        })]
        var image = Painter.generateImage(imageString, 500, 522, contents);
        message.channel.send({ files: [await image] });
    }
}