/*genero una variable que es un objeto con el querySelector manipulo los objetos del DOM
//let titulo = document.querySelector('h1');
//coloco un texto, le defino un titulo:
//titulo.innerHTML = 'Juego del número secreto';
//genero una variable para el objeto parrafo:
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10';
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = []; //Creo una lista o array en donde voy a almacenar los numeros generados para no repetirlos
let numeroMaximo = 100;

console.log(numeroSecreto);

function asignarElementoTexto(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = (texto);
    return;
}
//Definimos y declaramos una funcion para verificar los intentos
function verificarIntento() {
    console.log(numeroSecreto);
    //la funcion getById me permite buscar elementos por id .value trae el valor que tiene ese elemento
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
      
    //=== compara numero y tipo de dato
    if (numeroDeUsuario === numeroSecreto) {
        //llamo a la funcion ElementoTexto para cambiar el mensaje y utilizo el operador ternario para la cantidad de intentos
        asignarElementoTexto( 'p' , `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //remuevo el atributo deshabilitar para habilitar el boton reiniciar el juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarElementoTexto('p', 'El número que yo pense es menor');

        }else{
            asignarElementoTexto('p', 'El número que yo pense es mayor');
        }
        intentos ++;
        limpiarCaja();
        
    }
    return;
}

//Creo una funcion que limpie la entrada del usuario cuando no acierta:
function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';
   
}

//Creo una funcion para generar un número aleatorio entre 1 y 100
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+ 1;
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);
    console.log(intentos);

   //Si ya se sortearon todos los numeros posibles
    if (listaNumerosGenerados.length == numeroMaximo) {
        //Entrego un mensaje en la pantalla
       asignarElementoTexto("p", "Ya se sortearon todos los números posibles")

    }else{

        //Si el numeroGenerado esta en la lista hacemos esto, recursividad de la funcion
            if (listaNumerosGenerados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                //si no esta en la lista, lo agrega y retorna su valor
                listaNumerosGenerados.push(numeroGenerado);
                return numeroGenerado;
            }
    }
    
}

//Creo la funcion condiciones iniciales 
function condicionesIniciales() {
    //Llamo a la funcion asignarElementoTexto para crear los mensajes en pantalla
    asignarElementoTexto('h1', "Bienvenid@ al juego del número secreto");
    asignarElementoTexto('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    //generamos el numero secreto llamando a la funcion generar numero secreto
    numeroSecreto = generarNumeroSecreto();
    //inicializo los intentos en 1
    intentos = 1;
}

function reiniciarJuego() {
    //Esta funcion va a limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio con intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego durante la partida
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


