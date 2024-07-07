/*genero una variable que es un objeto con el querySelector manipulo los objetos del DOM
//let titulo = document.querySelector('h1');
//coloco un texto, le defino un titulo:
//titulo.innerHTML = 'Juego del número secreto';
//genero una variable para el objeto parrafo:
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10';
*/

let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarElementoTexto(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = (texto);
    return;
}

//Definimos y declaramos una funcion para verificar los intentos
function verificarIntento() {
    //la funcion getById me permite buscar elementos por id .value trae el valor que tiene ese elemento
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
       
   
    
    //=== compara numero y tipo de dato
    if (numeroDeUsuario === numeroSecreto) {
        //llamo a la funcion ElementoTexto para cambiar el mensaje y utilizo el operador ternario para la cantidad de intentos
        asignarElementoTexto( 'p' , `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarElementoTexto('p', 'El número que yo pense es menor')

        }else{
            asignarElementoTexto('p', 'El número que yo pense es mayor')

        }
        intentos ++;
        
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
