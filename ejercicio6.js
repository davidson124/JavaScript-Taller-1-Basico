

// Ejercicio_6
// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces

alert('✌️HOLA✌️\n Repetiremos tus frases cuantas veces quieras👌')
const frase = String(prompt('📝Escribe tu frase: '))
if(Number(frase)){
    alert('❌❌ Error: Este campo no admite números ❌❌')
}else{
    const numero = Number(prompt('🧮 Ingrese el numero que se repetira tu frase'));
    if(isNaN(numero)){
        alert('❌❌ Error: Este campo no admite letras ❌❌')
    }else{
        for(let i = 1; i<=numero; i++){
            console.log(i,frase);
        }
        setTimeout(()=>{
            alert('GOOD BYE');
        },'2000');
    }
}