function executarEventos() {
// Evento de foco no navegador
window.addEventListener('focus', event => {
    console.log("focus"); 
});

// Evento de clique no navegador
window.addEventListener('click', event => {
    console.log("click"); 
});
}