const caesar = function(oldString, shift) {
    let result = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let _i = 0; _i < oldString.length; _i++) {
        let oldChar = oldString.charAt(_i);
        if (alphabet.indexOf(oldChar.toLowerCase()) === -1) {
            result += oldChar;
        } else {
            let modulo = (alphabet.indexOf(oldChar.toLowerCase()) + shift) % 26;
            if (modulo < 0) {
                modulo += 26;
            }
            let newChar = alphabet.charAt(modulo);
            if (oldChar === oldChar.toUpperCase()) {
                result += newChar.toUpperCase();
            } else {
                result += newChar;
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = caesar;
