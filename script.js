// Connexion
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signalForm = document.getElementById("signalForm");

  // === Connexion ===
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const role = document.getElementById("role").value;
      if (role === "citoyen") {
        window.location.href = "signaler.html";
      } else {
        window.location.href = "admin.html";
      }
    });
  }

  // === Signalement ===
  if (signalForm) {
    const getLocationBtn = document.getElementById("getLocation");
    const localisationInput = document.getElementById("localisation");

    getLocationBtn.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          localisationInput.value = `${pos.coords.latitude}, ${pos.coords.longitude}`;
        });
      } else {
        alert("La géolocalisation n’est pas supportée sur ce navigateur.");
      }
    });

    signalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const description = document.getElementById("description").value;
      const localisation = localisationInput.value;

      const panne = {
        id: Date.now(),
        nom: document.getElementById("nom").value,
        telephone: document.getElementById("telephone").value,
        description,
        localisation,
        statut: "En attente"
      };

      let pannes = JSON.parse(localStorage.getItem("pannes") || "[]");
      pannes.push(panne);
      localStorage.setItem("pannes", JSON.stringify(pannes));

      alert("Panne signalée avec succès !");
      signalForm.reset();
    });
  }

  // === Suivi citoyen ===
  const suiviTable = document.getElementById("suiviTable");
  if (suiviTable) {
    const pannes = JSON.parse(localStorage.getItem("pannes") || "[]");
    const tbody = suiviTable.querySelector("tbody");
    pannes.forEach((p) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${p.id}</td>
        <td>${p.description}</td>
        <td>${p.localisation}</td>
        <td>${p.statut}</td>`;
      tbody.appendChild(tr);
    });
  }

  // === Tableau de bord admin ===
  const adminTable = document.getElementById("adminTable");
  if (adminTable) {
    const pannes = JSON.parse(localStorage.getItem("pannes") || "[]");
    const tbody = adminTable.querySelector("tbody");

    pannes.forEach((p) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${p.id}</td>
        <td>${p.nom}</td>
        <td>${p.description}</td>
        <td>${p.localisation}</td>
        <td>${p.statut}</td>
        <td>
          <button class="resolve">Résolue</button>
        </td>`;
      tbody.appendChild(tr);
    });

    tbody.addEventListener("click", (e) => {
      if (e.target.classList.contains("resolve")) {
        const id = e.target.closest("tr").children[0].textContent;
        const pannes = JSON.parse(localStorage.getItem("pannes") || "[]");
        const index = pannes.findIndex((p) => p.id == id);
        pannes[index].statut = "Résolue";
        localStorage.setItem("pannes", JSON.stringify(pannes));
        e.target.closest("tr").children[4].textContent = "Résolue";
      }
    });
  }
});

