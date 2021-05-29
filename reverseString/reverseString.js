const reverseString = function(word) {
    let output = ""
    let len = word.length - 1;
    for (let i = len ; i >= 0; i--){
        output += word.substr(i, 1);
    }
    return output;
};

module.exports = reverseString;
