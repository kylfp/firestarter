// General Purpose
function addButtonClickListener(buttonId: string, callback: () => void) : void {
  let button = document.getElementById(buttonId) as HTMLButtonElement | null;
  if (button) {
    button.addEventListener("click", callback);
  }
}
addButtonClickListener("settingsBtn", openSettings);
addButtonClickListener("closeSettingsBtn", closeSettings);

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

function loadHTMLContent(url: string, containerId: string): void {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch HTML fom ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      let constainer = document.getElementById(containerId);
      if(constainer) {
        constainer.innerHTML = html;
      }
    })
    .catch((error) => {
      console.error("Error loading HTML content:", error);
      
    })
}

async function loadHTMLAsset(url: string, containerId: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch asset ${response.statusText}`);
    }
    const html = await response.text();
    const constainer = document.getElementById(containerId);
    if (constainer) {
      constainer.innerHTML = html;
    }
  } catch (error) {
    console.error()
  }
}
