var TextArea = require("./../models/textarea.js");

module.exports = {
    name: "thatsafact",
    async execute(painter, message, args) {
        var imageString = "https://memestorage1.blob.core.windows.net/meme-template/thatsafact.png";
        var contents = [new TextArea.TextArea({
            content: args[2],
            x: 231,
            y: 90,
            width: 155
        })];
        var image = painter.generateImage(imageString, 319, 247, contents);
        message.channel.send({ files: [await image] });
    }
}