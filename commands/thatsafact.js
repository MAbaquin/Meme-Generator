var Painter = require("../painter.js");
var TextArea = require("../models/textarea.js");

module.exports = {
    names: ['thatsafact','taf'],
    description: "[CONTENT] and that's a fact",
    async execute(message, args) {
        var imageString = "https://memestorage1.blob.core.windows.net/meme-template/thatsafact.png";
        var contents = [new TextArea.TextArea({
            content: args.join(' '),
            x: 231,
            y: 90,
            width: 155
        })];
        var image = Painter.generateImage(imageString, 319, 247, contents);
        message.channel.send({ files: [await image] });
    }
}