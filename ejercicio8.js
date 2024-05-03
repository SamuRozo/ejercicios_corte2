//CALCULAR LA POTENCIA DE UN NÚMERO

function calcularpotencia(base, exponente){
    if(!Number.isInteger(base) || !Number.isInteger(exponente)){
        return "Ambos números deben ser enteros.";
    }

    if(exponente===0){
        return 1;
    }

    if(base===0 && exponente<0){
        return "No se puede realizar la operación.";
    }

    let resultado = 1;

    for(let i = 0; i < Math.abs(exponente); i++){
        resultado *=base;
    }

    return exponente < 0 ? 1 / resultado : resultado;
}

console.log(calcularpotencia(2, 3))