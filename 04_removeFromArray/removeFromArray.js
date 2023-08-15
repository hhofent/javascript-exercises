
const removeFromArray = function (array, ...args) {
    const array1 = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            array1.push(item);
        }
    })
    return array1;
};

// Do not edit below this line
module.exports = removeFromArray;
