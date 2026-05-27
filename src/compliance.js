import { siteContent } from "./data/siteContent.js";
import { renderShell } from "./lib/render.js";

renderShell({
  pageTitle: "Compliance | Nexus Cleaning Solutions",
  activePath: "compliance",
});

document.querySelector("[data-compliance-headline]").textContent =
  siteContent.compliance.headline;
document.querySelector("[data-compliance-summary]").textContent =
  siteContent.compliance.summary;
document.querySelector("[data-compliance-close]").textContent = siteContent.compliance.close;

document.querySelector("[data-compliance-sections]").innerHTML =
  siteContent.compliance.sections
    .map(
      (section) => `
        <article class="coverage-card">
          <p class="eyebrow">${section.title}</p>
          <h3>${section.title}</h3>
          <p>${section.body}</p>
        </article>
      `,
    )
    .join("");
