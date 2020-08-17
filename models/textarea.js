class TextArea {
    content; x; y; width; font; size;
    constructor(newContent) {
        if (newContent != null) {
            this.content = newContent.content != null ? newContent.content : "";
            this.x = newContent.x != null ? newContent.x : 0;
            this.y = newContent.y != null ? newContent.y : 0;
            this.width = newContent.width != null ? newContent.width : 150;
            this.font = newContent.font != null ? newContent.font : "Arial";
            this.size = newContent.size != null ? newContent.size : 12;
        }
    }
}

module.exports = {
    TextArea: TextArea
}