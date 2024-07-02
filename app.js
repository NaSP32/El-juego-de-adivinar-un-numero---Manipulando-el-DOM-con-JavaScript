//genero una variable que es un objeto con el querySelector manipulo los objetos del DOM
let titulo = document.querySelector('h1');
//coloco un texto, le defino un titulo:
titulo.innerHTML = 'Juego del número secreto';
//genero una variable para el objeto parrafo:
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10';
//Definimos y declaramos una funcion
function intentoDeUsuario() {
    alert('Click desde el boton');
}