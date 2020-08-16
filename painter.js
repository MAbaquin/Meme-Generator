const { Canvas } = require('canvas-constructor');
var fontFamily = 'Arial';
var fontSize = 12;
var content = 'This is a meme'
var contentX = 0;
var contentY = 0;
var contentWidth = 150;

async function generateImage(imageString, width, height) {
    const loadedImage = await Canvas.resolveImage(imageString);

    let image = new Canvas(width, height)
        .printImage(loadedImage, 0, 0, width, height)
        .setTextFont(fontFamily)
        .setTextSize(fontSize)
        .printWrappedText(content, contentX, contentY, contentWidth);
    return image;
}

function setContent(text, x, y, width) {
    content = text;
    contentX = x;
    contentY = y;
    contentWidth = width;
}

function setFontFamily(font) {
    fontFamily = font;
}

function setFontSize(size) {
    fontSize = size;
}

module.exports = {
    generateImage: generateImage,
    setContent: setContent,
    setFontFamily: setFontFamily,
    setFontSize: setFontSize
}