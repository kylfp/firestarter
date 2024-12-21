// General Purpose
function addButtonClickListener(buttonId: string, callback: () => void) : void {
  let button = document.getElementById(buttonId) as HTMLButtonElement | null;
  console.log(`Assigned Function ${callback}`)
  if (button) {
    button.addEventListener("click", callback);
  }
}

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

async function loadHTMLAsset(url: string, containerId: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch asset ${response.statusText}`);
    }
    const html = await response.text();
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html;
      console.log(`Successfully loaded ${url}`)
    }
  } catch (error) {
    console.error("Error fetching asset:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTMLAsset("./assets/settingsBtnIcon.html", "settingsBtn")
  addButtonClickListener("settingsBtnIcon", openSettings);
  addButtonClickListener("closeSettingsBtn", closeSettings);
})
