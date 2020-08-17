module.exports = {
    name: "whatifgodsaid",
    async execute(painter, message, args) {
        var imageString = "https://memestorage1.blob.core.windows.net/meme-template/whatifgodsaid.png";
        var image = painter.generateImage(imageString, 500, 522, args[2], 378, 392, 248, "Arial", 32);
        message.channel.send({ files: [await image] });
    }
}