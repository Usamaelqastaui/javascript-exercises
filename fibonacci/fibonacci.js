const fibonacci = function(a) {
    if(a < 1) {
        return "OOPS"
    } else if (a == 1 || a == 2){
        return 1;
    } else {
        let sum = [1,1];
        for(let i = 2; i < a; i++){
            sum[i] = sum[i-1] + sum [i-2];
        }
        return sum[a-1];
    }
    
};

module.exports = fibonacci;
