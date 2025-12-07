// // Calcular el IMC (Indice de Masa Corporal)
// //  Formula ==> IMC = peso(kg) / altura(m)^2.
const pacientes = [
    { nombre: 'Nilson', peso: 70, altura: 1.72 },
    { nombre: 'Kevin', peso: 68, altura: 1.70 },
    { nombre: 'Camilo', peso: 84, altura: 1.83 },
    { nombre: 'Ronald', peso: 77, altura: 1.78 },
    { nombre: 'Gabriel', peso: 58, altura: 1.66 },
];

// // 1. Iterar la lista de pacientes
// // 1.1 De esta lista extraer el peso y la altura
// // 1.2 Pasar los valores extraidos a la funcion calcularIMC (formula)
// // 1.3 Listar nombre del paciente y el IMC 

// for(let i = 0; i <= pacientes.length; i++){
//     console.log(i, pacientes[i].nombre);
// }

// for(let p = 0; p <= pacientes.length[i].peso; p++){
//     // console.log(p, pacientes[p].peso);
// }
// for(let t = 0; t <= pacientes.length[i].altura; t++){
//     // console.log(t, pacientes[t].talla);
// }
// console.log(`usuari@ ${nombre [i]} }`);


// // for (let k=0; k <= pacientes.length; k++){
// //     console.log(pacientes[i].nombre);
// // }

for (let i = 0; i < pacientes.length; i++) {
  const peso = pacientes[i].peso;
  const talla = pacientes[i].talla;
  const imc = peso / (talla * talla);
  console.log("Usuario:", pacientes[i].nombre, "Su indice de masa corporal es de : ", imc.toFixed(2));
  }




