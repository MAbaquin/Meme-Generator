module.exports = {
    name: "thatsafact",
    async execute(painter, message, args) {
        var imageString = "https://memestorage1.blob.core.windows.net/meme-template/thatsafact.png";
        var image = painter.generateImage(imageString, 319, 247, args[2], 231, 90, 155);
        message.channel.send({ files: [await image] });
    }
}