// Ejercicio_1

const prompt = require("prompt-sync")();

const num1 = Number(prompt("Ingrese el primer número: "));
const num2 = Number(prompt("Ingrese el segundo número: "));

const sumar = num1 + num2;

const resultado = `La suma de ${num1} y ${num2} es: ${sumar}`;

console.log(resultado);