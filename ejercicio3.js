function sumadigitos(num){
    const numstring = Math.abs(num).toString();

    let suma = 0;

    for(let i = 0; i<numstring.length; i++){
        const digito = parseInt(numstring[i]);
        suma += digito;
    }

    return suma;
}

console.log(sumadigitos(1234))
console.log(sumadigitos(20202020))