//CONTAR VOCALES EN UNA CADENA DE TEXTO

function contarvocales(str){
    str = str.tolowerCase();

    let vocales = 0;

    for(let i = 0; i<str.length; i++){
        const char = str[i];

        if(char==="a" || char==="e" || char==="i" || char==="0" || char==="u"){
            vocales++;
        }
    }
    return vocales;
}

console.log(contarvocales("Palabra"))
console.log(contarvocales("Von Humboldt"))
console.log(contarvocales("JavaScript"))
