//NÚMERO PALINDRÓMICO

function palindromo(num){

    if(!Number.isInteger(num)){
        return "El valor debe ser un número entero.";
    }

    const numstring = Math.abs(num).toString();

    let numinvertido = "";

    for(let i = numstring.length - 1; i>= 0; i--){
        numinvertido += numstring[i];
    }

    return numstring === numinvertido;
}

console.log(palindromo(12321))
console.log(palindromo(909))
console.log(palindromo(1209))