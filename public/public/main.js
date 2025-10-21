// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Ramappa Lake Non-Veg Pickles site loaded 🍗");

  // Add animation for the title
  const title = document.querySelector("h1");
  if (title) {
    title.style.transition = "transform 0.5s ease, color 0.5s ease";
    title.addEventListener("mouseover", () => {
      title.style.transform = "scale(1.05)";
      title.style.color = "#ffd700";
    });
    title.addEventListener("mouseout", () => {
      title.style.transform = "scale(1)";
      title.style.color = "#fff";
    });
  }

  // Highlight menu items dynamically (if any in future)
  const items = document.querySelectorAll(".items div");
  items.forEach(item => {
    item.addEventListener("click", () => {
      alert(`You clicked on ${item.textContent.trim()} 😋`);
    });
  });
});
