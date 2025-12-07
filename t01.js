function calcularPromedio( total, cantidadNotas ) {
    // Clases: Empiezan con la primera en Mayuscula
    return ( total / cantidadNotas ).toFixed( 1 );  // Redondear mantiene la cantidad de decimales que se le indique
     // Redondear hacia abajo, al entero mas proximo
}

function sumarNotas ( listaNotas ) {
    let sumaNotas = 0;
    
    for( let nota of listaNotas ) {
        // console.log( nota );
        sumaNotas = sumaNotas + nota;
    }

    return sumaNotas;  // Una funcion solo puede retornar un valor
}

// Implementacion:
// let estudiante1 = {
//     nombre: 'Gabriel',
//     notas: [ 3.4, 1.2, 3.7, 4.1 ]
// };
const estudiantes = [
    { nombre: 'Gabriel', materia: 'Logica', notas: [ 3.4, 1.2, 3.7, 4.1, 3.3 ] },       // 0
    { nombre: 'Nilson', materia: 'Logica', notas: [ 4, 2, 2.7, 5 ] },                   // 1
    { nombre: 'Kevin', materia: 'Logica', notas: [ 3, 3.1, 3.1, 1, 5, 5 ] },            // 2
    { nombre: 'Ramiro', materia: 'Logica', notas: [ 2.7 ] },                            // 3
    { nombre: 'Andres', materia: 'Logica', notas: [ 4.3, 2.5, 3.2 ] }                   // 4
];

// Inserta nueva nota
// estudiante1.notas.push( 3.3 );
// Function listaEstudiantes (listaEstuante){
    
//     for(let k = 0; k < estudiantes.length; k++)
//          {
//             sumarNotas( estudiantes[k].notas );
//             calcularPromedio( totalNotas, estudiantes[k].notas.length );
        
//         }

//     console.log( 'La nota final de ', estudiantes[k].nombre, ' es ', promedio  );
    
// }
// listaEstudiantes(estudiantes);

       

     
    
        

// const totalNotas = sumarNotas( estudiante1.notas );
// const promedio = calcularPromedio( totalNotas, estudiante1.notas.length );

// console.log( 'La nota final de ', estudiante1.nombre, ' es ', promedio  );