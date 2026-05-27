import{b as t,s as e,a as r}from"./render-VimwIhdI.js";const o="/assets/valet-hero-Be4dK1Kg.jpg";t({pageTitle:"Nexus Cleaning Solutions | Trash Valet Services Across DFW",activePath:"/"});document.querySelector("[data-home-hero]").innerHTML=`
  <p class="eyebrow">${e.business.hero.eyebrow}</p>
  <h1>${e.business.hero.title}</h1>
  <p>${e.business.hero.summary}</p>
  <div class="hero-actions">
    ${e.business.hero.ctas.map((a,i)=>`<a class="button ${i===0?"is-solid":"is-ghost"}" href="${a.href}">${a.label}</a>`).join("")}
  </div>
`;document.querySelector("[data-home-panel]").innerHTML=`
  <img class="hero-photo" src="${o}" alt="Clean apartment breezeway with doorstep valet trash bins" />
  <p class="label-chip">Property teams across DFW</p>
  <h2>Serving the DFW metroplex since 2018.</h2>
  <div class="stat-stack">
    ${e.business.highlights.map(a=>`<div class="stat-card"><strong>${a}</strong></div>`).join("")}
  </div>
`;document.querySelector("[data-about]").innerHTML=`
  <div class="about-copy">
    <p class="eyebrow">${e.about.kicker}</p>
    <h2>${e.about.title}</h2>
    <p>${e.about.body}</p>
  </div>
  <div class="about-points">
    ${e.about.points.map(a=>`
          <div>
            <span></span>
            <p>${a}</p>
          </div>
        `).join("")}
  </div>
`;document.querySelector("[data-reasons]").innerHTML=e.positioning.reasons.map(a=>`
      <article class="reason-card">
        <h3>${a.title}</h3>
        <p>${a.body}</p>
      </article>
    `).join("");document.querySelector("[data-service-list]").innerHTML=r(e.serviceGroups);document.querySelector("[data-workflow]").innerHTML=e.workflow.map((a,i)=>`
      <article class="workflow-card">
        <p class="eyebrow">Step 0${i+1}</p>
        <h3>${a.title}</h3>
        <p>${a.body}</p>
      </article>
    `).join("");document.querySelector("[data-coverage-preview]").innerHTML=e.area.zones.map(a=>`
      <article class="coverage-card">
        <p class="eyebrow">${a.title}</p>
        <h3>${a.title}</h3>
        <p>${a.cities.join(", ")}</p>
      </article>
    `).join("");document.querySelector("[data-inquiry-forms]").innerHTML=`
  <article class="form-card form-card-main">
    <p class="eyebrow">Inquiry form</p>
    <h3>Request service information</h3>
    <p class="form-note">
      Send property details and the NCS team will follow up with next steps.
    </p>
    <form action="https://formsubmit.co/${e.business.publicContact.inquiryEmail}" method="POST" target="_blank">
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
      <a href="tel:+12676996862">${e.business.publicContact.phone}</a>
      <a href="mailto:${e.business.publicContact.inquiryEmail}">${e.business.publicContact.inquiryEmail}</a>
    </div>
  </aside>
`;
