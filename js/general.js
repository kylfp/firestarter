"use strict";
// General Purpose
function addButtonClickListener(buttonId, callback) {
    let button = document.getElementById(buttonId);
    console.log(`Button: ${button}`);
    console.log(`Assigned Function ${callback}`);
    if (button) {
        button.addEventListener("click", callback);
    }
}
function openSettings() {
    let settingsPanel = document.getElementById("settingsPanel");
    if (settingsPanel) {
        settingsPanel.style.width = "30vw";
    }
}
function closeSettings() {
    let settingsPanel = document.getElementById("settingsPanel");
    if (settingsPanel) {
        settingsPanel.style.width = "0vw";
    }
}
async function loadHTMLAsset(url, containerId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch asset ${response.statusText}`);
        }
        const html = await response.text();
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = html;
            console.log(`Successfully loaded ${url}`);
        }
    }
    catch (error) {
        console.error("Error fetching asset:", error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    loadHTMLAsset("./assets/settingsBtnIcon.html", "settingsBtn");
    loadHTMLAsset("./assets/closeBtnIcon.html", "closeSettingsBtn");
    addButtonClickListener("settingsBtn", openSettings);
    addButtonClickListener("closeSettingsBtn", closeSettings);
});
