import { siteContent } from "./data/siteContent.js";
import { renderLegalSections, renderShell } from "./lib/render.js";

renderShell({
  pageTitle: "Terms of Use | Nexus Cleaning Solutions",
  activePath: "terms",
});

document.querySelector("[data-terms-date]").textContent =
  "Effective date: " + siteContent.legal.termsEffectiveDate;
document.querySelector("[data-terms-sections]").innerHTML = renderLegalSections(
  siteContent.legal.termsSections,
);
