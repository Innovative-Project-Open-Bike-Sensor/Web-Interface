async function fetchTrackData(apiKey) {
  try {
    const response = await fetch("http://localhost:8000/api/measurements", {
      headers: {
        "X-API-KEY": apiKey,
      },
    });
    if (!response.ok) throw new Error("Erreur API");
    return await response.json();
  } catch (error) {
    console.error("Erreur:", error);
    return [];
  }
}

function openTab(tabName) {
  const tabs = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
