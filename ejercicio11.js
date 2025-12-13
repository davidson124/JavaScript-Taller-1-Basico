// 11. Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

//     `const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];`

//     El resultado debería ser el siguiente:

//     ``` JavaScript
//     11
//     ```

//     NOTA: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones de ceros y unos.

const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];
alert(`De la siguiente lista ${nums}`);

alert('Hallaremos la cantidad de unos (1)');

let numUno = 0

for(let d of nums ){
    if (d == 1){
        numUno+=d;
    }
}
setTimeout(()=>{
    console.log('La respuesta es :',numUno);
},800)
