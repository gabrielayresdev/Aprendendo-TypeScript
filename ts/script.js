"use strict";
const buscaCursos = async () => {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    mostraCursos(json);
};
buscaCursos();
const mostraCursos = (cursos) => {
    const html = cursos.map((curso) => {
        return `<h1 style="color: ${curso.nivel === "iniciante" ? "red" : "green"};">${curso.nome}</h1>
    <p>Horas: ${curso.horas}</p>
    <p>Tipo: ${curso.gratuito ? "gratuito" : "pago"}</p>
    <p>Tags: ${curso.tags.join(", ")}</p>
    `;
    });
    document.body.innerHTML = `${html}`;
};
