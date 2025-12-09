// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

const anioactual = 2025;


const nombre = String(prompt('Ingrese su nombre : '));
    if (Number(nombre)){
        alert('⛔INGRESASTE UN VALOR INCORRECTO ⛔')
    }
    else{
        const anioNacimiento = Number(prompt(`${nombre}, ingresa tu año de nacimiento : `));
        if( anioNacimiento > 2025 || anioNacimiento < 2000 || isNaN(anioNacimiento) ){
            alert('⛔INGRESASTE UN VALOR INCORRECTO ⛔')
        }
        else{
            const edad = anioactual - anioNacimiento;
            alert(`Hola ${nombre}, grandioso! tienes: ${edad}`);
        }
    }
        
        
    
