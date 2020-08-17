const Canvas = require('canvas-constructor');

async function generateImage(imageString, width, height, contents) {
    const loadedImage = await Canvas.resolveImage(imageString);

    let image = new Canvas.Canvas(width, height).printImage(loadedImage, 0, 0, width, height);

    for (let content of contents) {
        image.setTextAlign('center')
        .setTextFont(content.font)
        .setTextSize(content.size)
        .printWrappedText(content.content, content.x, content.y, content.width)
    }
        
    return image.toBufferAsync();
}

module.exports = {
    generateImage: generateImage
}