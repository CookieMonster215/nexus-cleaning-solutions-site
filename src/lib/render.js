import { siteContent } from "../data/siteContent.js";

export function renderShell({ pageTitle, activePath }) {
  document.title = pageTitle;

  const nav = [
    ["/", "Home"],
    ["/services.html", "Services"],
    ["/coverage.html", "Coverage"],
    ["/compliance.html", "Compliance"],
  ];

  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");

  if (header) {
    header.innerHTML = `
      <div class="site-header-shell">
        <a class="brand-lockup" href="/">
          <span class="brand-mark">NCS</span>
          <span class="brand-copy">
            <strong>${siteContent.business.name}</strong>
            <small>${siteContent.business.primaryOffer}</small>
          </span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          ${nav
            .map(
              ([href, label]) => `<a href="${href}" class="${activePath === href ? "is-active" : ""}">${label}</a>`,
            )
            .join("")}
        </nav>
        <a class="header-cta" href="/#inquiry">Inquire</a>
      </div>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <div class="site-footer-shell">
        <div>
          <p class="footer-kicker">Serving DFW since 2018</p>
          <h2>${siteContent.business.name}</h2>
          <p>${siteContent.business.primaryOffer} and support services for multifamily and managed properties across the entire DFW metroplex.</p>
        </div>
        <div>
          <p class="footer-label">Contact</p>
          <p><a href="tel:+12676996862">${siteContent.business.publicContact.phone}</a></p>
          <p><a href="mailto:${siteContent.business.publicContact.inquiryEmail}">${siteContent.business.publicContact.inquiryEmail}</a></p>
        </div>
        <div>
          <p class="footer-label">Pages</p>
          <p><a href="/services.html">Services</a></p>
          <p><a href="/coverage.html">Coverage</a></p>
          <p><a href="/compliance.html">Compliance</a></p>
          <p><a href="/privacy.html">Privacy Policy</a></p>
          <p><a href="/terms.html">Terms of Use</a></p>
        </div>
      </div>
    `;
  }
}

export function renderServiceCards(groups) {
  const services = groups.flatMap((group) => group.services);

  return `
    <section class="service-group">
      <div class="service-grid">
        ${services
          .map(
            (service) => `
              <article class="service-card" id="${service.slug}">
                <h3>${service.name}</h3>
                <p>${service.summary}</p>
                <ul class="mini-list">
                  ${service.points.map((point) => `<li>${point}</li>`).join("")}
                </ul>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderLegalSections(sections) {
  return sections
    .map(
      (section) => `
        <section class="legal-section">
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        </section>
      `,
    )
    .join("");
}
