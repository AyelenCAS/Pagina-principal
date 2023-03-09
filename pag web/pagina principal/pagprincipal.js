const navToggle = document.querySelector(".nav-toggle");
const opcionesa = document.querySelector(".opcionesa");

navToggle.addEventListener("click", () => {
    opcionesa.classList.toggle("nav-menu_visible");

  if (opcionesa.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});




