import { addButtonEventListener, loadHTMLAsset} from "./util"

function openSettings(): void {
  let settingsPanel: HTMLDivElement | null = document.getElementById("settingsPanel") as HTMLDivElement | null;

  if(settingsPanel) {
    settingsPanel.style.width = "30vw";
  }
}

function closeSettings(): void {
  let settingsPanel: HTMLElement | null = document.getElementById("settingsPanel");

  if(settingsPanel) {
    settingsPanel.style.width = "0vw";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTMLAsset("./assets/settingsBtnIcon.html", "settingsBtn")
  loadHTMLAsset("./assets/closeBtnIcon.html", "closeSettingsBtn")
  loadHTMLAsset("./assets")
  addButtonEventListener("settingsBtn", openSettings);
  addButtonEventListener("closeSettingsBtn", closeSettings);
})
