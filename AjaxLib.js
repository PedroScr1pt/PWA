function mostrarSeccion(nombre) {
  $Ajax(nombre + ".htl", {
    cache: true,
    onfinish: function (html) {
      $("mainContent").innerHTML = html;
      // Comienzo efecto de Highlight
      new Effect.Highlight("mainContent");
    },
    avisoCargando: "divCargando",
  });
}
