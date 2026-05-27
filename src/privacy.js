import { siteContent } from "./data/siteContent.js";
import { renderLegalSections, renderShell } from "./lib/render.js";

renderShell({
  pageTitle: "Privacy Policy | Nexus Cleaning Solutions",
  activePath: "/privacy.html",
});

document.querySelector("[data-privacy-date]").textContent =
  "Effective date: " + siteContent.legal.privacyEffectiveDate;
document.querySelector("[data-privacy-sections]").innerHTML = renderLegalSections(
  siteContent.legal.privacySections,
);
