import { siteContent } from "./data/siteContent.js";
import { renderServiceCards, renderShell } from "./lib/render.js";

renderShell({
  pageTitle: "Services | Nexus Cleaning Solutions",
  activePath: "/services.html",
});

document.querySelector("[data-services-page]").innerHTML = `
  <p>${siteContent.positioning.intro}</p>
  ${renderServiceCards(siteContent.serviceGroups)}
`;
