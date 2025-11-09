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


// const nombre = String(prompt('Ingrese su nombre : '));  
// console.log('A continuación ingresarás una número para imprimir la frase el número de veces que indiques ');
// const numero = Number(prompt('Ingrese el número : '));
// const frase = String(prompt('Ingresa una frase : '));
// console.log('Hola '+ nombre + ' tu frase se imprimirá ' + numero + ' veces:');

// for(let k = 1; k <= numero; k ++ ){
//     const mensaje =(k +''+ frase);
//     console.log(mensaje);
// };



// Ejercicio_7
// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:



// console.log('A continuación debes ingresar dos números, el primero debe ser menor que el segundo, \n esto para hallar el rango entre ellos\n');
// const numero1 = Number(prompt("Ingrese el primer número: "));
// const numero2 = Number(prompt("Ingrese el segundo número: ")); 
// console.log('los números entre ' + numero1 + ' y ' + numero2 + ' son:');

// let k = numero1;
// do {
//     console.log( k );

//     k = k + 1;
// } while ( k <= numero2 );





// ejercicio_8
// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.
// Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:


// const nombres =['Pedro', 'Pablo', 'Maria', 'Juan', 'Diana'];
// const agregarNombre = String(prompt('Ingrese un nombre :' ));
// nombres.push(agregarNombre);
// console.log(nombres);



//ejercicio_9



const list = Number(prompt('¿Cuántos números deseas ingresar? : '));
const numeros =[];
for (let k =1; k <= list; k = k + 1 ){
    numeros.push(k);
    
}

numeros.splice(1, 1);
console.log('Los números que ingresaste son: ', numeros);