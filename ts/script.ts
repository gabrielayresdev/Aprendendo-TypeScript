const buscaProduto = async () => {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  setData(json);
};

buscaProduto();

interface empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface produto {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: empresa;
  empresaMontadora: empresa;
}

const setData = (data: produto) => {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.descricao}</p>
      <br />
      <span>Fabricante: ${data.empresaFabricante.nome}</span>
      <span>Fabricante: ${data.empresaMontadora.nome}</span>
    </div>
  `;
};
