// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: magic;


const urlYouTube = "https://www.youtube.com/user/" + youtube + "/"

let req = new Request(urlYouTube);
let html = await req.loadString();

let followers = extractYTFollowers(html);

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

function extractYTFollowers(html) {
    let followerStart = html.indexOf('"subscriberCountText":{"simpleText":');
    let followerEnd = html.indexOf('},"tvBanner"', followerStart + 1);
    let follower = html.substring(followerStart + 37, followerEnd);
    let lastIndex = follower.lastIndexOf(" ")
    follower = follower.substring(0, lastIndex)
    console.log("subscriber: " + follower);
    return follower;
}