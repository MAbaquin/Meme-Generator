const Canvas = require('canvas-constructor');

async function generateImage(imageString, width, height, content = 'This is a meme', contentX = 0, contentY = 0, contentWidth = 150, fontFamily = 'Arial', fontSize = 12) {
    const loadedImage = await Canvas.resolveImage(imageString);

    return new Canvas.Canvas(width, height)
        .printImage(loadedImage, 0, 0, width, height)
        .setTextAlign('center')
        .setTextFont(fontFamily)
        .setTextSize(fontSize)
        .printWrappedText(content, contentX, contentY, contentWidth)
        .toBufferAsync();
}

module.exports = {
    generateImage: generateImage
}