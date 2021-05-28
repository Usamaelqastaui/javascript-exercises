const repeatString = function(word, number) {
    if (number < 0){
        return "ERROR";
    }
    let output = ""
    for( let i = 0 ; i < number; i++){
        output = output.concat(word);
    }
    return output;
};

module.exports = repeatString;
