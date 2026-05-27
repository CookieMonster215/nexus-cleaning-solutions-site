import{b as c,s as e}from"./render-VimwIhdI.js";c({pageTitle:"Compliance | Nexus Cleaning Solutions",activePath:"/compliance.html"});document.querySelector("[data-compliance-headline]").textContent=e.compliance.headline;document.querySelector("[data-compliance-summary]").textContent=e.compliance.summary;document.querySelector("[data-compliance-close]").textContent=e.compliance.close;document.querySelector("[data-compliance-sections]").innerHTML=e.compliance.sections.map(t=>`
        <article class="coverage-card">
          <p class="eyebrow">${t.title}</p>
          <h3>${t.title}</h3>
          <p>${t.body}</p>
        </article>
      `).join("");
