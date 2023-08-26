// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function getData() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleData(json);
}

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  nivel: "iniciante" | "avancado";
}

function isCurso(curso: unknown): curso is Curso {
  if (
    curso &&
    typeof curso === "object" &&
    "nome" in curso &&
    "horas" in curso &&
    "aulas" in curso &&
    "gratuito" in curso &&
    "tags" in curso
  ) {
    return true;
  }
  return false;
}

function handleData(data: unknown) {
  if (Array.isArray(data)) {
    data.forEach((curso) => {
      if (isCurso(curso)) {
        document.body.innerHTML += `
        <h1>${curso.nome}</h1>
        <p>Horas: ${curso.horas}</p>
        <p>${curso.aulas} aulas</p>
        <p>${curso.gratuito ? "Gratuito" : "Pago"}</p>
      `;
      }
    });
  }
}

getData();
