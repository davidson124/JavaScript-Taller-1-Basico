// Ejercicio_1 
// Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

const prompt = require("prompt-sync")();

// const num1 = Number(prompt("Ingrese el primer número: "));
// const num2 = Number(prompt("Ingrese el segundo número: "));

// const sumar = num1 + num2;

// const resultado = `La suma de ${num1} y ${num2} es: ${sumar}`;

// console.log(resultado);

// Ejercicio_2
// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años
const anioActual = 2025;

const nombre = String(prompt('Ingrese su nombre : '));
const anioNacimiento =Number(prompt('Ingrese año de nacimiento: '));

const edadActual = anioActual - anioNacimiento;


const message = 'Hola ' + nombre + ', grandioso! tienes ' + edadActual+ ' años.';

console.log(message);