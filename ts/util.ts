function addButtonEventListener(buttonId: string, callback: () => void) : void {
  let button = document.getElementById(buttonId) as HTMLButtonElement | null;
  console.log(`Button: ${button}`)
  console.log(`Assigned Function ${callback}`)
  if (button) {
    button.addEventListener("click", callback);
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

export { addButtonEventListener, loadHTMLAsset}
