"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addButtonEventListener = addButtonEventListener;
exports.loadHTMLAsset = loadHTMLAsset;
function addButtonEventListener(buttonId, callback) {
    let button = document.getElementById(buttonId);
    console.log(`Button: ${button}`);
    console.log(`Assigned Function ${callback}`);
    if (button) {
        button.addEventListener("click", callback);
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
