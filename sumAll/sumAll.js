const sumAll = function(a , b) {
    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number"){
        return "ERROR";
    } 
    
    if (b > a ){
        let c = a;
        a = b;
        b = c;
    }
    let sum = 0;
    for(let i = b; i <= a; i++){
        sum += i;
    }
    return sum;
};

module.exports = sumAll;
