import { siteContent } from "./data/siteContent.js";
import { renderShell } from "./lib/render.js";

renderShell({
  pageTitle: "Coverage | Nexus Cleaning Solutions",
  activePath: "coverage",
});

document.querySelector("[data-coverage-summary]").textContent = siteContent.area.summary;
document.querySelector("[data-coverage-headline]").textContent = siteContent.area.headline;

document.querySelector("[data-coverage-page]").innerHTML = siteContent.area.zones
  .map(
    (zone) => `
      <article class="coverage-card">
        <p class="eyebrow">${zone.title}</p>
        <h3>${zone.title}</h3>
        <p>${zone.cities.join(", ")}</p>
      </article>
    `,
  )
  .join("");
