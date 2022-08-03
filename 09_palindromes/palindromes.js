const palindromes = function (string) {
    let filteredString = string.split("").filter(char => char.match(/[a-zA-Z]/)).join("").toLowerCase();
    for (let _i = 0; _i < filteredString.length / 2; ++_i) {
        if (filteredString[_i] !== filteredString[filteredString.length-1-_i]) {
            return false;
        } 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
