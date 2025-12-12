// 8. Crea un programa a partir de las siguientes instrucciones:

//    - Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
//    - Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
//    - Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
//    - Recorre el arreglo e imprímelo.
//    - Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

//     ``` JavaScript
//         Ingresa un nombre > Camilo
//         Ingresa otro nombre > Ariel
//         Pedro
//         Pablo
//         Ariel
//         Juan
//         Diana
//         Camilo
//     ```

console.log('INGRESA NOMBRES A LA LISTA');

const nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];
setTimeout(()=>{
    const nuevoNombre = String(prompt('Ingrese un nombre: '));
    if(Number(nuevoNombre)){
        alert(' -_-  ERROR, SOLO SE ADMITEN LETRAS  -_- ');
    }else{
        const segundoNombre = String(prompt('Ingrese un segundo nombre: '));
        if(Number(segundoNombre)){
            alert('-_- ERROR, SOLO SE ADMITEN LETRAS -_-');
            return segundoNombre;
        }else{
            nombres.push(nuevoNombre);
            nombres.splice( 2, 1, segundoNombre);
            console.log(`${nuevoNombre}se ha agregado al final de la lista y \n${segundoNombre} se ha ubicado en el pusto numero 3`)
            nombres.forEach((element)=>console.log(element));
        }
    }
},500);


