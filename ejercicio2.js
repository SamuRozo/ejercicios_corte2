function esprimo(num){
    if(num<2){
        return false;
    }
    if(num===2){
        return true;
    }

    if(num%2===0){
        return false;
    }

    const limite = Math.sqrt(num);
    for(let i=3; i<=limite ;i+=2){
        if(num%i===0){
            return false;
        }
    }
    return false;
}

console.log(esprimo(7))
console.log(esprimo(2))
console.log(esprimo(10))
console.log(esprimo(17))