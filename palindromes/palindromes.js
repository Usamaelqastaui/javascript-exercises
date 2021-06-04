const palindromes = function (str) {
    str = str.replace(/[^\w\s]|_/g, "")
             .replace(/\s+/g, "")
             .toLowerCase();

    let res = "";
    const len = str.length;
    for(let i = 0; i < len; i++){
        res = res.concat(str[len-1-i]);
    }
    return res == str;
};

module.exports = palindromes;
