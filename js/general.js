"use strict";
function addButtonClickListener(buttonId, callback) {
    let button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener("click", callback);
    }
}
addButtonClickListener("settingsPanelBtn", openSettings);
addButtonClickListener("settingPanelCloseBtn", closeSettings);
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
