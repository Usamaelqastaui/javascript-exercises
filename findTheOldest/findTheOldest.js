const findTheOldest = function(ppl) {
    let preAge = 0
    return ppl.reduce((a,b)=>{
        let today = (new Date()).getFullYear();
        let currentAge = 0;
        (b['yearOfDeath'])? currentAge = b['yearOfDeath'] - b['yearOfBirth']: currentAge = today - b['yearOfBirth'] ;
        if(currentAge > preAge){
            a = b;
            preAge = currentAge;
        }
        return a;
    }, 0)
};

module.exports = findTheOldest;
