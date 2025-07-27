//Variables
let numeroRandomico = parseInt(prompt('Ingresa el número máximo que quieres indicar para el juego desde 1 hasta tu elección.'));
let numeroSecreto = Math.floor(Math.random()*numeroRandomico)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 3;
console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroRandomico} por favor:`));
    console.log(typeof(numeroUsuario));
    //Este código realiza la comparación
    if(numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        //Template string ``, utilizamos un operador ternario para decidir si la palabra es plural o singular
        //? = if y : = caso contrario
        alert(`Acertaste, el número es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor.');
        } else {
            alert('El número secreto es mayor.');
        }
        //Incrementamos el contador cuando no acierta.
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraVeces = 'veces';
        if (intentos > maximoIntentos){
            alert(`Llegaste al número máximo de ${maximoIntentos} intentos.`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número.');
    }
}

