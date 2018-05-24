var options = {
  type: "basic",
  title: "Primary Title",
  message: "Primary message to display",
  iconUrl: "icon.png"
};


chrome.notifications.create(options, creationCallback);

function creationCallback() {
  console.log("Popup done!");
}
