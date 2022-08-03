/**
 * 
 */
const sumAll = function(first, last) {
    if (typeof first !== 'number' || typeof last !== 'number') {
        return 'ERROR';
    }
    if ((first < 0) || (last < 0)) {
        return 'ERROR';
    }
    let sum = 0;
    if (first > last) {
        let temp = first;
        first = last;
        last = temp;
    }
    for (let _i = first; _i <= last; _i++) {
        sum += _i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
