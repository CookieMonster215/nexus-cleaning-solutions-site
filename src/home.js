import { siteContent } from "./data/siteContent.js";
import heroImage from "./assets/valet-hero.jpg";
import { renderServiceCards, renderShell } from "./lib/render.js";

renderShell({
  pageTitle: "Nexus Cleaning Solutions | Trash Valet Services Across DFW",
  activePath: "home",
});

document
  .querySelector(".hero-grid")
  .style.setProperty("--hero-image", `url("${heroImage}")`);

document.querySelector("[data-home-hero]").innerHTML = `
  <p class="eyebrow">${siteContent.business.hero.eyebrow}</p>
  <h1>${siteContent.business.hero.title}</h1>
  <p>${siteContent.business.hero.summary}</p>
  <div class="hero-actions">
    ${siteContent.business.hero.ctas
      .map(
        (cta, index) =>
          `<a class="button ${index === 0 ? "is-solid" : "is-ghost"}" href="${cta.href}">${cta.label}</a>`,
      )
      .join("")}
  </div>
  <div class="hero-proof" aria-label="Business highlights">
    ${siteContent.business.highlights
      .slice(0, 3)
      .map((item) => `<span>${item}</span>`)
      .join("")}
  </div>
`;

document.querySelector("[data-about]").innerHTML = `
  <div class="about-copy">
    <p class="eyebrow">${siteContent.about.kicker}</p>
    <h2>${siteContent.about.title}</h2>
    <p>${siteContent.about.body}</p>
  </div>
  <div class="about-points">
    ${siteContent.about.points
      .map(
        (point) => `
          <div>
            <span></span>
            <p>${point}</p>
          </div>
        `,
      )
      .join("")}
  </div>
`;

document.querySelector("[data-reasons]").innerHTML = siteContent.positioning.reasons
  .map(
    (reason) => `
      <article class="reason-card">
        <h3>${reason.title}</h3>
        <p>${reason.body}</p>
      </article>
    `,
  )
  .join("");

document.querySelector("[data-service-list]").innerHTML = renderServiceCards(
  siteContent.serviceGroups,
  { compact: true },
);

document.querySelector("[data-workflow]").innerHTML = siteContent.workflow
  .map(
    (step, index) => `
      <article class="workflow-card">
        <p class="eyebrow">Step 0${index + 1}</p>
        <h3>${step.title}</h3>
        <p>${step.body}</p>
      </article>
    `,
  )
  .join("");

document.querySelector("[data-coverage-preview]").innerHTML = siteContent.area.zones
  .map(
    (zone, index) => `
      <article class="coverage-card">
        <p class="eyebrow">0${index + 1}</p>
        <h3>${zone.title}</h3>
        <p>${zone.cities.join(", ")}</p>
      </article>
    `,
  )
  .join("");

document.querySelector("[data-inquiry-forms]").innerHTML = `
  <article class="form-card form-card-main">
    <p class="eyebrow">Inquiry form</p>
    <h3>Request service information</h3>
    <p class="form-note">
      Send property details and the NCS team will follow up with next steps.
    </p>
    <form action="https://formsubmit.co/${siteContent.business.publicContact.inquiryEmail}" method="POST" target="_blank">
      <input type="hidden" name="_subject" value="NCS website inquiry" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <div class="field-grid">
        <div>
          <label for="relay-name">Name</label>
          <input id="relay-name" name="name" required />
        </div>
        <div>
          <label for="relay-company">Company</label>
          <input id="relay-company" name="company" />
        </div>
        <div>
          <label for="relay-email">Email</label>
          <input id="relay-email" name="email" type="email" required />
        </div>
        <div>
          <label for="relay-phone">Phone</label>
          <input id="relay-phone" name="phone" />
        </div>
        <div>
          <label for="relay-property">Property name</label>
          <input id="relay-property" name="property_name" />
        </div>
        <div>
          <label for="relay-city">City</label>
          <input id="relay-city" name="city" />
        </div>
      </div>
      <label for="relay-service">Primary service</label>
      <select id="relay-service" name="primary_service">
        <option>Valet Trash Service</option>
        <option>Trash Out Service</option>
        <option>Make Ready Service</option>
        <option>Housekeeping Service</option>
        <option>Carpet Cleaning</option>
        <option>Painting Service</option>
        <option>Common Area Cleaning</option>
      </select>
      <label for="relay-details">Project details</label>
      <textarea id="relay-details" name="details" placeholder="Tell us what property support you need."></textarea>
      <div class="hero-actions">
        <button class="button is-solid" type="submit">Send Inquiry</button>
      </div>
    </form>
  </article>
  <aside class="form-card contact-card">
    <p class="eyebrow">Direct contact</p>
    <h3>Prefer to talk first?</h3>
    <p class="form-note">
      Reach out directly for valet trash service, turnover support, or recurring cleaning needs.
    </p>
    <div class="contact-stack">
      <a href="tel:+12676996862">${siteContent.business.publicContact.phone}</a>
      <a href="mailto:${siteContent.business.publicContact.inquiryEmail}">${siteContent.business.publicContact.inquiryEmail}</a>
    </div>
  </aside>
`;
