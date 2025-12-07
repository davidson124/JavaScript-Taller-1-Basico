// Ejercicio_1 
// Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.


alert('           😊-----  HOLA -----😊 \n🔗----CLICK PARA CONTINUAR ----🔗');
alert('Ingresa dos números a sumar');
const num1 = Number(prompt("Ingrese el primer número: "));
if (isNaN(num1)){
    alert('El primer valor ingresado no es un número válido');
}else{
    const num2 = Number(prompt("Ingrese el segundo número: "));
    if (isNaN(num2)){
        alert(`El segundo valor ingresado no es un número válido`);
    }else{
        const sumar = num1 + num2;

        const resultado = `La suma de ${num1} y ${num2} es: ${sumar}`;

        alert(resultado);
    }
}



