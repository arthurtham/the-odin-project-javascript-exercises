const removeFromArray = function(array, ...values) {
  return array.filter(function (item) {
    return !values.includes(item)
  });
};

// Do not edit below this line
module.exports = removeFromArray;
