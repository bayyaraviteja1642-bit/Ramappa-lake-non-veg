document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  title.style.opacity = 0;
  title.style.transition = "opacity 2s";
  setTimeout(() => {
    title.style.opacity = 1;
  }, 300);
});
