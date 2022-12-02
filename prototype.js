function crearLinks() {
  // Recorro todos los H3 dentro de la Sidebar1
  var opciones = $$("#sidebar1 h3");
  opciones.each(function (opcion) {
    // Genero la acción del clic por cada uno
    opcion.onclick = function () {
      // utilizo el id de cada h3 como nombre de sección
      mostrarSeccion(opcion.id);
    };
  });
}
window.onload = function () {
  crearLinks();
};

function mostrarSeccion(nombre) {
  $Ajax(nombre + ".html", {
    cache: true,
    onfinish: function (html) {
      $("mainContent").innerHTML = html;
    },
  });
}
