// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: magic;


let url = "https://www.instagram.com/prestissimo_guitar/";
let req = new Request(url);
let html = await req.loadString();

let followers = extractFollowers(html);

let widget = await createWidget(followers);

if (!config.runsInWidget) {
    await widget.presentSmall();
}

Script.setWidget(widget);
Script.complete();

async function createWidget(followers) {
    let widget = new ListWidget();
    widget.backgroundColor = Color.black();
    let wFollowers = widget.addText(followers);
    wFollowers.centerAlignText();
    return widget;
}

function extractFollowers(html) {
    let followersStart = html.indexOf('"edge_followed_by":{"count":');
    let followersEnd = html.indexOf('},"fbid"', followersStart + 1);
    let followers = html.substring(followersStart + 28, followersEnd);
    console.log("followersStart: " + followersStart)
    console.log("followersEnd: " + followersEnd)
    console.log("followers: " + followers)
    return followers;
}