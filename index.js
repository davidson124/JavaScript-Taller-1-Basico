const prompt = require("prompt-sync")();

// Ejercicio_1 
// Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.



// const num1 = Number(prompt("Ingrese el primer número: "));
// const num2 = Number(prompt("Ingrese el segundo número: "));

// const sumar = num1 + num2;

// const resultado = `La suma de ${num1} y ${num2} es: ${sumar}`;

// console.log(resultado);




// Ejercicio_2
// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años



// const anioActual = 2025;

// const nombre = String(prompt('Ingrese su nombre : '));
// const anioNacimiento =Number(prompt('Ingrese año de nacimiento: '));

// const edadActual = anioActual - anioNacimiento;

// const message = 'Hola ' + nombre + ' grandioso! tienes ' + edadActual+ ' años.';

// console.log(message);



// Ejercicio_3
// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
// Si es múltiplo debe imprimir Si, el número x es múltiplo 5, de lo contrario debe imprimir No, el número x no es múltiplo de 5.
// NOTA: Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.



// const nombre = String(prompt('Ingrese su nombre : '));
// console.log('A continuacón ingresarás un número para saber si es multiplo de 5');
// const num = Number(prompt('Ingrese el número : '));
// const message = (num % 5 === 0)
//  ? `Oye ${nombre} tu número ${num} es multiplo de 5`
//  : `Oye ${nombre} tu número ${num} no es multiplo de 5`;
//  console.log(message);



// Ejercicio_4
//  Escribe un programa que le pida al usuario ingresar un número.
// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.



// const nombre = String(prompt('Ingrese su nombre : '));
// console.log('A continuación ingresarás un número para saber si es multiplo de 3 o 5');
// const num = Number(prompt('Ingrese un número : '));
// if (num % 3 === 0){
//     console.log('Hola '+ nombre +' tu numero '+ num +' es bing');
// }else if (num % 5 === 0){
//     console.log('Hola ' + nombre + ' tu númoero '+ num +' es bong');
// }else {
//     console.log('Hola ' + nombre +' tu núemro '+num+' no cumple nuestra condición, por tanto es,', num);
// };




//ejercicio 5
// Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.



// const frase = String(prompt('Ingresa una frase : '));

// for (let k = 1; k <= 10; k+= 1){
//     console.log(k +''+ frase);
// };



// Ejercicio_6
// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces


const nombre = String(prompt('Ingrese su nombre : '));  
console.log('A continuación ingresarás una número para imprimir la frase el número de veces que indiques ');
const numero = Number(prompt('Ingrese el número : '));
const frase = String(prompt('Ingresa una frase : '));
console.log('Hola '+ nombre + ' tu frase se imprimirá ' + numero + ' veces:');

for(let k = 1; k <= numero; k ++ ){
    const mensaje =(k +''+ frase);
    console.log(mensaje);
};


