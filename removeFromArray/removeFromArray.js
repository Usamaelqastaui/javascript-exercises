const removeFromArray = function(ary, ...Args) {
    Args.forEach(function x(v, i , a){
        let index = ary.indexOf(v);
        if(index > -1){
            ary.splice(index, 1);
        }
    })
    return ary;
};

module.exports = removeFromArray;
