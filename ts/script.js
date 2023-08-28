"use strict";
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
function handleData(data) {
    const total = data.reduce((accumulator, current) => {
        return accumulator + current[1];
    }, 0);
    console.log(total);
}
async function getData() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const json = await response.json();
    handleData(json);
}
getData();
