"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
function isUserData(data) {
    if (data &&
        typeof data === "object" &&
        ("nome" in data || "email" in data || "cpf" in data)) {
        return true;
    }
    return false;
}
function validJson(value) {
    try {
        JSON.parse(value);
    }
    catch (err) {
        return false;
    }
    return true;
}
function handleKeyUp(event) {
    const { target } = event;
    if (target instanceof HTMLInputElement) {
        window.UserData = {
            ...window.UserData,
            [target.id]: target.value,
        };
        localStorage.setItem("user", JSON.stringify(window.UserData));
    }
}
const form = document.getElementById("form");
form?.addEventListener("keyup", handleKeyUp);
const newUser = localStorage.getItem("user");
if (newUser && validJson(newUser)) {
    const json = JSON.parse(newUser);
    if (isUserData(json)) {
        window.UserData = json;
        Object.entries(json).forEach(([key, value]) => {
            const elem = document.getElementById(key);
            if (elem instanceof HTMLInputElement) {
                elem.value = value;
            }
        });
    }
}
