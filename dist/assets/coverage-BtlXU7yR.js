import{b as t,s as a}from"./render-VimwIhdI.js";t({pageTitle:"Coverage | Nexus Cleaning Solutions",activePath:"/coverage.html"});document.querySelector("[data-coverage-summary]").textContent=a.area.summary;document.querySelector("[data-coverage-headline]").textContent=a.area.headline;document.querySelector("[data-coverage-page]").innerHTML=a.area.zones.map(e=>`
      <article class="coverage-card">
        <p class="eyebrow">${e.title}</p>
        <h3>${e.title}</h3>
        <p>${e.cities.join(", ")}</p>
      </article>
    `).join("");
