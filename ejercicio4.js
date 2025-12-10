// Ejercicio_4
//  Escribe un programa que le pida al usuario ingresar un número.
// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

alert('\n🌐 VERIFICAREMOS SI TU NUMERO ES MULTIPLO DE 3, 5 O AMBOS\n');
let numero = prompt('🧮 Ingrese el número a validar: ');
if (isNaN(numero)){
    console.log('Error: el valor que ingresaste es incorrecto ');
}if (numero % 3 === 0 && numero % 5 !== 0 ){
    console.log('bing');
}if (numero % 5 === 0 && numero % 3 !== 0 ){
    console.log('bong');
}if(numero % 3 === 0 && numero % 5 === 0){
    console.log('bingbong');
}else{
    console.log(numero);
}