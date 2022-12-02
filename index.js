function crearLinks() {
  // Recorro todos los H3 dentro de la Sidebar1
  var opciones = $$("#sidebar1 h3");
  opciones.each(function (opcion) {
    // Genero la acci�n del clic por cada uno
    opcion.onclick = function () {
      // utilizo el id de cada h3 como nombre de seccion
      mostrarSeccion(opcion.id);
    };
  });
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
window.onload = function () {
  crearLinks();
};

function mostrarSeccionSinEfecto(nombre) {
  $Ajax(nombre + ".html", {
    cache: true,
    onfinish: function (html) {
      $("mainContent").innerHTML = html;
    },
    avisoCargando: "divCargando",
  });
}
function mostrarSeccion(nombre) {
  $Ajax(nombre + ".html", {
    cache: true,
    onfinish: function (html) {
      $("mainContent").innerHTML = html;
      // Comienzo efecto de Highlight
      new Effect.Highlight("mainContent");
    },
    avisoCargando: "divCargando",
  });
}

function mostrarSeccion1(nombre) {
  $Ajax(nombre + ".html", {
    cache: true,
    onfinish: function (html) {
      // Comienzo efecto de salida
      new Effect.Fade("mainContent", {
        duration: 1,
        afterFinish: function () {
          // Comienzo efecto de aparici�n de contenido
          $("mainContent").innerHTML = html;
          new Effect.Appear("mainContent");
        },
      });
    },
    avisoCargando: "divCargando",
  });
}
