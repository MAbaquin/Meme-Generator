const Canvas = require('canvas-constructor');

async function generateImage(imageString, width, height, contents) {
    const loadedImage = await Canvas.resolveImage(imageString);

    var image = new Canvas.Canvas(width, height).printImage(loadedImage, 0, 0, width, height);
    for (var index = 0; index < contents.length; index++) {
        var content = contents[index];
        image.setTextAlign('center')
            .setTextFont(content.font)
            .setTextSize(content.size)
            .printWrappedText(content.content, content.x, content.y, content.width);
    }

    return image.toBufferAsync();
}

module.exports = {
    generateImage: generateImage
}