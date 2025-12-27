// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("actionBtn");

  if (!btn) return;

  btn.addEventListener("click", () => {
    alert("Button clicked! Your HTML, CSS, and JS are working together.");
  });
});
