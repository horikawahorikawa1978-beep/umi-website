document.addEventListener("DOMContentLoaded",()=>{
 const c=window.UMI_CONTENT||{};
 const map={
  "about-title":"aboutTitle","about-subtitle":"aboutSubtitle","about-why-title":"aboutWhyTitle","about-why-text":"aboutWhyText",
  "story-title":"storyTitle","story-text":"storyText","philo-jp":"philoJp","why-label":"whyLabel","why-sub":"whySub","why-text":"whyText",
  "vision-label":"visionLabel","vision-sub":"visionSub","vision-text":"visionText","mission-label":"missionLabel","mission-sub":"missionSub","mission-text":"missionText",
  "brand-title":"brandTitle","brand-subtitle":"brandSubtitle","brand-coming":"brandComing","brand-name":"brandName","brand-tag":"brandTag","brand-copy":"brandCopy",
  "company-title":"companyTitle","company-subtitle":"companySubtitle","company-business":"companyBusiness","company-website":"companyWebsite"
 };
 Object.entries(map).forEach(([id,key])=>{const el=document.getElementById(id);if(el&&c[key]!=null)el.textContent=c[key]});
 document.querySelectorAll("[data-company]").forEach(el=>el.textContent=c.companyName||"Umi株式会社");
 document.querySelectorAll("[data-copy]").forEach(el=>el.textContent="© 2026 Umi Inc.");
 document.querySelectorAll("[data-contact]").forEach(el=>el.href="mailto:info@umi-beauty.com");
});