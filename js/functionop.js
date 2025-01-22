// Funções e operadores lógicos
console.log(ac == 10 && ab == 20); 
console.log(ac == 10 || ab == 15);

// Condicional simples usando if
let cor = "verde"; 
if (cor === "verde") { 
    console.log("siga"); 
} else {
    console.log("pare"); 
}

// Condicional com else if
let corV = "vermelho"; 
if (corV === "verde") {
    console.log("siga");
} else if (corV === "amarelo") {
    console.log("atenção");
} else {
    console.log("pare");
}

// Estrutura switch
switch (cor) {
    case "verde":
        console.log("siga");
        break;
    case "amarelo":
        console.log("atenção");
        break;
    case "vermelho":
        console.log("pare");
        break;
    default:
        console.log("não sei");
}

// Laço de repetição for
let n = 5;
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${n} = ${i * n}`); 
}

// Função de calculadora usando eval
function calc(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado1 = calc(1, 2, "+");
console.log(resultado1);

// Forma resumida (IIFE - função que executa na hora)
(function (x1, x2, operator) {
    console.log(eval(`${x1} ${operator} ${x2}`));
})(1, 4, "+");
