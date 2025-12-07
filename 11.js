const lista = [1,4,5,6,7,3,10,15,29,32];

let numMayor = lista[0];

for(let i = 1; i <= lista.length; i++){
    if(lista[i]>numMayor)
    {
        numMayor = lista[i];
        console.log(`El número mayor de la lista es ${numMayor}`)
    }
}