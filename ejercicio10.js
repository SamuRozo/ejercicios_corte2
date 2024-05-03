//SUMA DE LOS DIVISORES DE UN NÚMERO

function sumadivisores(num){
    if(!Number.isInteger(num)){
        return "El valor debe ser un número entero.";
    }

    num = Math.abs(num);

    let suma = 0;

    for(let i = 1; i < num; i++){
        if(num%1 === 0){
            suma += i;
        }
    }

    return suma;
}

console.log(sumadivisores(12))
console.log(sumadivisores(-6))
console.log(sumadivisores(1))
console.log(sumadivisores(3.5))