document.getElementById("btn").addEventListener("click", async () => {
  const res = await fetch("/api/info");
  const data = await res.json();
  document.getElementById("result").textContent = data.message;
});