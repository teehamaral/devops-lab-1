const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const cta = document.getElementById("cta");
if (cta) {
  cta.addEventListener("click", () => {
    window.alert("Hello from the DevOps Lab boilerplate!");
  });
}
