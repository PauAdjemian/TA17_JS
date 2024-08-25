let numero = document.querySelector("span");
const boton = document.querySelector("button");

function incrementar(){
    let valorActual = parseInt(numero.textContent);
    valorActual++;
    numero.textContent = valorActual;
};

boton.addEventListener('click', () => {
    incrementar();
});