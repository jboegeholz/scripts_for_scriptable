// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: magic;

let widget = await createWidget();

if (!config.runsInWidget) {
    await widget.presentSmall();
}

Script.setWidget(widget);
Script.complete();

async function createWidget() {
    let widget = new ListWidget();
    widget.backgroundColor = Color.black();
    let header = widget.addText("Hello World");
    header.font = Font.mediumSystemFont(20);
    return widget;
}