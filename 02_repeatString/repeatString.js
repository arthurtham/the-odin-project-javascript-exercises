const repeatString = function(string, repeats) {
    if (repeats < 0) {
        return "ERROR";
    }
    return string.repeat(repeats);
};

// Do not edit below this line
module.exports = repeatString;
