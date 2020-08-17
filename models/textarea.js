module.exports = {
    TextArea: TextArea
}

class TextArea {
    content = "string";
    x = 0;
    y = 0;
    width = 0;
    font = "Arial";
    size = 12;

    get [prop]() { return this.prop };
    set [prop](value) { this.prop = value };
}