const leapYears = function(yr) {
    if (yr % 4 === 0){
        if (yr % 100 !== 0 || (yr % 100 ===0 && yr % 400 === 0)){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

module.exports = leapYears;
