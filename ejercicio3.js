// Ejercicio_3
// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
// Si es múltiplo debe imprimir Si, el número x es múltiplo 5, de lo contrario debe imprimir No, el número x no es múltiplo de 5.
// NOTA: Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.

alert('\n 😊 VAMOS A VERIFICAR SI TU NÚMERO ES MULTIPLO DE 5 😊 \n                 \n                        🔗 !!click para continua!!🔗');

const numero = Number(prompt('🧮 Ingrese el número a velidar : '));
if(numero <=0 || isNaN(numero)){
    alert('⛔INGRESASTE UN VALOR INCORRECTO⛔' );
}else{
    if(numero % 5 === 0){
    alert(`👌👌👌 SI,TU NUMERO ${numero}, ES MULTIPLO DE 5 👌👌👌`);
    }else{
        alert(`✖️✖️✖️ NO,TU NUMERO ${numero}, NO ES MULTIPLO DE 5 ✖️✖️✖️`);
    }
};