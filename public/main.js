// public/main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("🍗 Ramappa Lake Non-Veg Pickles website loaded successfully!");
  
  const learnMoreBtn = document.querySelector(".btn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      alert("Authentic Non-Veg Pickles made with ❤️ at Ramappa Lake!");
    });
  }
});
