
const C = window.UMI_CONTENT;
function txt(id, value){ const el=document.getElementById(id); if(el && value!==undefined) el.textContent=value; }
function html(id, value){ const el=document.getElementById(id); if(el && value!==undefined) el.innerHTML=value; }

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-company]").forEach(el => el.textContent=C.common.companyName);
  document.querySelectorAll("[data-contact]").forEach(el => el.href="mailto:"+C.common.contactEmail);
  document.querySelectorAll("[data-copy]").forEach(el => el.textContent=C.common.copyright);

  html("home-title", C.home.title);
  txt("home-subtitle", C.home.subtitle);
  txt("home-about-title", C.home.aboutTitle);
  txt("home-about-text", C.home.aboutText);

  txt("about-title", C.about.title);
  txt("about-subtitle", C.about.subtitle);
  txt("about-why-title", C.about.whyTitle);
  txt("about-why-text", C.about.whyText);
  txt("story-title", C.about.storyTitle);
  txt("story-text", C.about.storyText);

  txt("brand-title", C.brand.title);
  txt("brand-subtitle", C.brand.subtitle);
  txt("brand-coming", C.brand.comingSoon);
  txt("brand-name", C.brand.name);
  txt("brand-tag", C.brand.tag);
  txt("brand-copy", C.brand.copy);

  txt("company-title", C.company.title);
  txt("company-subtitle", C.company.subtitle);
  txt("company-business", C.company.business);
  txt("company-website", C.company.website);

  txt("philo-jp", C.philosophy.pageSubtitle);
  txt("why-label", C.philosophy.whyLabel);
  txt("why-sub", C.philosophy.whySub);
  txt("why-text", C.philosophy.whyText);
  txt("vision-label", C.philosophy.visionLabel);
  txt("vision-sub", C.philosophy.visionSub);
  txt("vision-text", C.philosophy.visionText);
  txt("mission-label", C.philosophy.missionLabel);
  txt("mission-sub", C.philosophy.missionSub);
  txt("mission-text", C.philosophy.missionText);
});
