window.addEventListener("DOMContentLoaded", () => {
  // Update footer
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

  // Review counter logic
  let count = localStorage.getItem("reviewCount");
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("reviewCount", count);

  const counterDisplay = document.getElementById("counter");
  counterDisplay.textContent = `You have submitted ${count} review(s).`;
});