function mostrarSeccion(nombre) {
  $Ajax(nombre + ".html", {
    cache: true,
    onfinish: function (html) {
      // Comienzo efecto de salida
      new Effect.Fade("mainContent", {
        duration: 1,
        afterFinish: function () {
          // Comienzo efecto de aparición de
          //contenido
          $("mainContent").innerHTML = html;
          new Effect.Appear("mainContent");
        },
      });
    },
    avisoCargando: "divCargando",
  });
}
