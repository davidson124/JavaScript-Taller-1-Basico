//ejercicio_9
// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

console.log('ECUENTRA TU NUMERO');
const lista =[];

const numero = Number(prompt('Ingresa un número mayor a 1: '));
if(numero <=0){
    alert('ERROR: DEBES INGRESAR UN NÚMERO MAYOR A 1');
}if(isNaN(numero)){
    alert('ERROR: SOLO SE ADMITEN NÚMEROS');
}else{   
    console.log('El resulado del proceso es:');
    for(let d = 1; d <= numero; d++){
        lista.push(d);
    }
    lista.splice(1,1)
    for(let d = 0; d < lista.length; d++){
        console.log(lista[d]);
    }
};
