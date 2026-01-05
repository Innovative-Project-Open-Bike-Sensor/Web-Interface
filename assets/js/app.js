const API_URL = "https://lilied-subprofessionally-mafalda.ngrok-free.dev/api/measurements";

async function fetchTrackData(apiKey) {
  try {
    const response = await fetch(API_URL, {
      headers: {
        "X-API-KEY": apiKey,
        "ngrok-skip-browser-warning": "true"
      }
    });

    if (!response.ok) {
      throw new Error("Erreur API " + response.status);
    }

    return await response.json();

  } catch (error) {
    console.error("Erreur fetch:", error);
    return [];
  }
}

function openTab(tabName) {
  document
    .querySelectorAll(".tab-content")
    .forEach(tab => tab.style.display = "none");

  const target = document.getElementById(tabName);
  if (target) {
    target.style.display = "block";
  }
}