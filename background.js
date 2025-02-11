let webcamAccessLog = [];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ blacklist: [] });
});

chrome.webNavigation.onCompleted.addListener(async (details) => {
    const url = new URL(details.url);
    const hostname = url.hostname;

    let { blacklist } = await chrome.storage.sync.get("blacklist");
    if (blacklist.includes(hostname)) {
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => {
            const accessTime = new Date().toLocaleString();
            webcamAccessLog.push({ site: hostname, time: accessTime });
            chrome.storage.sync.set({ webcamAccessLog });

            chrome.notifications.create({
                type: "basic",
                iconUrl: "icon.png",
                title: "Webcam Access Detected!",
                message: `Your webcam is being accessed by ${hostname}. Click to manage settings.`,
                priority: 2
            });
        })
        .catch(() => {});
});

chrome.notifications.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage();
});
