document.addEventListener("DOMContentLoaded", () => {
    const logContainer = document.getElementById("log");
    const clearButton = document.getElementById("clearLogs");
    
    chrome.storage.sync.get("webcamAccessLog", ({ webcamAccessLog }) => {
        if (webcamAccessLog && webcamAccessLog.length) {
            webcamAccessLog.forEach(entry => {
                let div = document.createElement("div");
                div.className = "log-item";
                div.textContent = `${entry.time} - ${entry.site}`;
                logContainer.appendChild(div);
            });
        } else {
            logContainer.innerHTML = "<p>No webcam activity detected.</p>";
        }
    });

    clearButton.addEventListener("click", () => {
        chrome.storage.sync.set({ webcamAccessLog: [] }, () => {
            logContainer.innerHTML = "<p>Logs cleared.</p>";
        });
    });
});
