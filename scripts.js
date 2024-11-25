document.addEventListener("DOMContentLoaded", () => {
  // Actualizar valores del simulador
  const sliders = [
    { id: "general-sens", valueId: "general-value" },
    { id: "scope2-sens", valueId: "scope2-value" },
    { id: "scope4-sens", valueId: "scope4-value" },
  ];

  sliders.forEach(slider => {
    const input = document.getElementById(slider.id);
    const valueSpan = document.getElementById(slider.valueId);

    input.addEventListener("input", () => {
      valueSpan.textContent = input.value;
    });
  });

  // Feedback Form
  const feedbackForm = document.getElementById("feedback-form");
  const feedbackResponse = document.getElementById("feedback-response");

  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    feedbackResponse.classList.remove("hidden");
    feedbackForm.reset();
  });

  // Toggle Benefits
  const toggleBenefits = document.getElementById("toggle-benefits");
  const benefitsList = document.getElementById("benefits-list");

  toggleBenefits.addEventListener("click", () => {
    benefitsList.classList.toggle("hidden");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Contact Form
  const contactForm = document.getElementById("contact-form");
  const contactResponse = document.getElementById("contact-response");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactResponse.classList.remove("hidden");
    contactForm.reset();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Lista de aplicaciones populares
  const popularApps = [
    { name: "Aim Assist Pro", description: "Mejora tu puntería con herramientas avanzadas.", image: "aim-assist.jpg" },
    { name: "FF Guide", description: "Guía completa con consejos y trucos.", image: "ff-guide.jpg" },
    { name: "Performance Booster", description: "Optimiza el rendimiento de tu dispositivo.", image: "performance-booster.jpg" },
  ];

  // Mostrar aplicaciones populares
  const popularAppsContainer = document.getElementById("popular-apps-container");
  popularApps.forEach((app) => {
    const card = document.createElement("div");
    card.className = "popular-app-card";
    card.innerHTML = `
      <img src="${app.image}" alt="${app.name}">
      <h4>${app.name}</h4>
      <p>${app.description}</p>
      <a href="#">Descargar</a>
    `;
    popularAppsContainer.appendChild(card);
  });

  // Rating Interactivo
  const ratings = document.querySelectorAll(".rating");
  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      alert(`Has calificado la app "${rating.getAttribute("data-app")}" con 5 estrellas. ¡Gracias!`);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const accounts = [
    { name: "Cuenta Pro", rank: "Heroico", region: "LATAM", price: 50, description: "Skins exclusivas y rango heroico." },
    { name: "Elite Gamer", rank: "Gran Maestro", region: "NA", price: 100, description: "Todas las armas evolucionadas y pases élite completos." },
    { name: "Veterano FF", rank: "Diamante", region: "EU", price: 30, description: "Cuenta antigua con muchos logros y skins." },
  ];

  const accountList = document.getElementById("account-list");
  const filters = {
    rank: document.getElementById("filter-rank"),
    region: document.getElementById("filter-region"),
    price: document.getElementById("filter-price"),
  };

  const displayAccounts = (filteredAccounts) => {
    accountList.innerHTML = "";
    filteredAccounts.forEach((account) => {
      const card = document.createElement("div");
      card.className = "account-card";
      card.innerHTML = `
        <h3>${account.name}</h3>
        <p>Rango: ${account.rank}</p>
        <p>Región: ${account.region}</p>
        <p>Precio: $${account.price}</p>
        <p>${account.description}</p>
        <a href="#">Comprar</a>
      `;
      accountList.appendChild(card);
    });
  };

  document.getElementById("apply-filters").addEventListener("click", () => {
    const rank = filters.rank.value;
    const region = filters.region.value;
    const price = filters.price.value;

    const filtered = accounts.filter((account) => {
      return (
        (!rank || account.rank === rank) &&
        (!region || account.region === region) &&
        (!price || account.price <= price)
      );
    });

    displayAccounts(filtered);
  });

  document.getElementById("upload-account-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("account-name").value;
    const rank = document.getElementById("account-rank").value;
    const price = document.getElementById("account-price").value;
    const description = document.getElementById("account-description").value;

    accounts.push({ name, rank, region: "Desconocido", price, description });
    displayAccounts(accounts);
    e.target.reset();
  });

  displayAccounts(accounts);
});
document.addEventListener("DOMContentLoaded", () => {
  const generatedResources = document.getElementById("generated-resources");
  const promoMessage = document.getElementById("promo-message");

  // Formulario de Generación
  document.getElementById("generator-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const playerName = document.getElementById("player-name").value;
    const resourceType = document.getElementById("resource-type").value;
    const resourceAmount = document.getElementById("resource-amount").value;

    const resourceItem = document.createElement("li");
    resourceItem.textContent = `${playerName} ha generado ${resourceAmount} ${resourceType}.`;
    generatedResources.appendChild(resourceItem);

    e.target.reset();
  });

  // Validación de Códigos Promocionales
  document.getElementById("promo-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const promoCode = document.getElementById("promo-code").value;
    const validCodes = ["FREEFIRE2024", "DIAMANTE100", "SKINEXTRA"];

    if (validCodes.includes(promoCode)) {
      promoMessage.textContent = "¡Código válido! Recursos desbloqueados.";
      promoMessage.style.color = "green";
    } else {
      promoMessage.textContent = "Código inválido. Intenta nuevamente.";
      promoMessage.style.color = "red";
    }

    e.target.reset();
  });
});
