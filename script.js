//your JS code here. If required.
let browserName = navigator.appName;
let version = navigator.appVersion;
document.getElementByTagName("body").innerHTML =  "You are using " + browserName + " version " + version;