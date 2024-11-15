const sumAll = function(startInt, endInt) {
    if (Number.isInteger(startInt) && Number.isInteger(endInt) && startInt > 0 && endInt > 0) {
        let result = 0;
        let largerInt;
        let smallerInt;
        if (startInt < endInt) {
            largerInt = endInt;
            smallerInt = startInt;
        }
        else {
            largerInt = startInt;
            smallerInt = endInt;
        }
        for (smallerInt; smallerInt <= largerInt; smallerInt++) {
            result += smallerInt;
        }
        return result;
    }
    else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
