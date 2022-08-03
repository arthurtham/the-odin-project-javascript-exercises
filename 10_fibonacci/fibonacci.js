const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    }
    index = Number(index);
    if (index === 0) {
        return 0;
    }
    if (index === 1 || index === 2) {
        return 1;
    }
    return fibonacci(index - 1) + fibonacci(index - 2);
};

// Do not edit below this line
module.exports = fibonacci;
