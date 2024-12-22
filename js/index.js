"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// General Purpose
const util_1 = require("./util");
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
document.addEventListener("DOMContentLoaded", () => {
    (0, util_1.loadHTMLAsset)("./assets/settingsBtnIcon.html", "settingsBtn");
    (0, util_1.loadHTMLAsset)("./assets/closeBtnIcon.html", "closeSettingsBtn");
    (0, util_1.addButtonEventListener)("settingsBtn", openSettings);
    (0, util_1.addButtonEventListener)("closeSettingsBtn", closeSettings);
});
