//Desafíos: Módulo 2

//1-Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
// De lo contrario, muestra "¡Buena semana!".
let diaSemana = prompt('Ingresa que día de la semana es hoy:');
console.log(diaSemana);
if(diaSemana == 'Sábado' | diaSemana == 'Domingo'){
    alert('¡Buen fin de semana!')
} else {
    alert('¡Buena semana!')
}
//2-Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt('Ingrese un número');
console.log(numero);
if(numero >= 0){
    alert('El número es positivo.')
} else {
    alert('El número es negativo.')
}
//3-Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
// En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacion = prompt('Ingrese su puntuación.');
console.log(puntuacion);
if(puntuacion >= 100){
    alert('¡Felicidades, has ganado!')
} else {
    alert('Intentalo nuevamente para ganar.')
}
//4-Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = 189;
alert(`El saldo actual de su cuenta es; ${saldo} dólares.`)
//5-Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt('Por favor, ingrese su nombre:');
alert(`¡Buenvenido ${nombre}!`);
