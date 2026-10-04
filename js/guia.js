(function () {
  var barra = document.querySelector(".barra");
  var boton = document.querySelector(".menu-boton");
  var indice = document.getElementById("indice");

  if (!barra || !boton || !indice) {
    return;
  }

  function cerrado() {
    barra.classList.remove("menu-abierto");
    boton.setAttribute("aria-expanded", "false");
  }

  boton.addEventListener("click", function () {
    var abierto = barra.classList.toggle("menu-abierto");
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
  });

  document.addEventListener("click", function (evento) {
    var enlace = evento.target.closest("[data-ir]");
    if (!enlace) {
      return;
    }
    var destino = document.getElementById(enlace.getAttribute("data-ir"));
    if (!destino) {
      return;
    }
    evento.preventDefault();
    destino.scrollIntoView();
    cerrado();
  });

  window.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
      cerrado();
      boton.focus();
    }
  });
})();
