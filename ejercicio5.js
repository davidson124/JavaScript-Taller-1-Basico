
//ejercicio 5
// Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

alert('No apasiona repetir tus frases 🥰\n 😊Vamos!!!');
const frase = String(prompt("Hola, Ingresa una frase por favor:"));
if (Number(frase)){
    alert('❌❌ Este campo no admite números ❌❌')
}else {
    for(let i = 1; i <= 10; i ++){
    console.log(frase,i);
};
};

