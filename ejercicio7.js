// 7. Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

//     ``` JavaScript
//     5
//     6
//     7
//     8
//     9
//     10
//     ```

//     NOTA:
//        - Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.
//        - Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.

console.log('HOLA!! VEREMOS EL RANGO ENTRE DOS NUMEROS');
setTimeout(()=>{
    const num1 = Number(prompt('🧮 Ingresa el primer número: '));
    if(isNaN(num1)){
        console.log('*_* EL PROGRAMA NO ADMITE LETRAS *_*\n           *_-TRY AGAIN *_-');
    }else{
        const num2 = Number(prompt('Ingrese el segundo número: '));
        if(isNaN(num2)){
            console.log('*_* EL PROGRAMA NO ADMITE LETRAS *_*\n           *_-TRY AGAIN *_-');  
            return num2; 
        }if( num2 <= num1 ){
            console.log('*_* EL SEGUNDO NÚMERO DEBE SER MAYOR AL PRIMERO *_*\n              *_-TRY AGAIN *_-'); 
        }
        else{
            console.log('El rando entre el número '+num1+' y el número '+num2+' es :');
            let d = num1;
            do{
                console.log(d);
                d+=1
            }while( d <= num2 )
        }
    }
},1200)

