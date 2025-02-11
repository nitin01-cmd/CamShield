document.addEventListener("DOMContentLoaded", () => {
    const blacklistContainer = document.getElementById("blacklist");
    const inputField = document.getElementById("blacklistInput");
    const addButton = document.getElementById("addBlacklist");

    function updateBlacklistUI(blacklist) {
        blacklistContainer.innerHTML = "";
        blacklist.forEach((site, index) => {
            let div = document.createElement("div");
            div.textContent = site;
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.onclick = () => removeBlacklist(index);
            div.appendChild(removeBtn);
            blacklistContainer.appendChild(div);
        });
    }

    function removeBlacklist(index) {
        chrome.storage.sync.get("blacklist", ({ blacklist }) => {
            blacklist.splice(index, 1);
            chrome.storage.sync.set({ blacklist });
            updateBlacklistUI(blacklist);
        });
    }

    addButton.addEventListener("click", () => {
        let newSite = inputField.value.trim();
        if (newSite) {
            chrome.storage.sync.get("blacklist", ({ blacklist }) => {
                blacklist.push(newSite);
                chrome.storage.sync.set({ blacklist });
                updateBlacklistUI(blacklist);
                inputField.value = "";
            });
        }
    });

    chrome.storage.sync.get("blacklist", ({ blacklist }) => {
        if (blacklist) updateBlacklistUI(blacklist);
    });
});

