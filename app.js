/*genero una variable que es un objeto con el querySelector manipulo los objetos del DOM
//let titulo = document.querySelector('h1');
//coloco un texto, le defino un titulo:
//titulo.innerHTML = 'Juego del número secreto';
//genero una variable para el objeto parrafo:
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10';
*/

let numeroSecreto = generarNumeroSecreto();

function asignarElementoTexto(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = (texto);
    return;
}

//Definimos y declaramos una funcion para verificar los intentos
function verificarIntento() {
    //la funcion getById me permite buscar elementos por id .value trae el valor que tiene ese elemento
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
       
    console.log(numeroSecreto);
    //=== compara numero y tipo de dato
    if (numeroDeUsuario === numeroSecreto) {
        //llamo a la funcion ElementoTexto para cambiar el mensaje
        asignarElementoTexto( 'p' , 'Acertaste el número ');
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarElementoTexto('p', 'El número que yo pense es menor')

        }else{
            asignarElementoTexto('p', 'El número que yo pense es mayor')

        }
    }
    return;
}

//Creo una funcion para generar un número aleatorio entre 1 y 100
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100)+ 1;
    
}

//Llamo a la funcion asignarElementoTexto para crear los mensajes en pantalla
asignarElementoTexto('h1', "Bienvenid@ al juego del número secreto");
asignarElementoTexto('p', 'Ingresa un número del 1 al 100');
