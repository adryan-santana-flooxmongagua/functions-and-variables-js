
function exibirArrays(){

// Pegando o timestamp atual
let agora = Date.now();
console.log(agora);

// Pegando a data atual formatada
let agr = new Date();
console.log(agr.toLocaleDateString("pt-BR"));

// Trabalhando com arrays
let carros = ["gt34", "camaro", "bugatti nova", 10, true, new Date(), function(){}]; 
console.log(carros);// Mostra todo o array
console.log(carros.length); // Mostra o tamanho do array
console.log(carros[0]); // Mostra o primeiro item
console.log(carros[5].getFullYear()); //mostra o ano

// Usando forEach pra passar por cada item do array
carros.forEach(function(value, index) {
    console.log(index, value);
});
}


