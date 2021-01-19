// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-purple; icon-glyph: genderless;

let widget = createWidget(followers, avatar, stat);

Script.setWidget(widget);
Script.complete();

function createWidget(followers, avatar, stat) {
    let widget = new ListWidget();
    widget.backgroundColor = Color.black();
    return widget;
}