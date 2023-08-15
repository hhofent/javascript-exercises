let string;
const reverseString = (string) => {
    let array = string.split("");
    array = array.reverse();
    string = array.join("");
    return string;
};
reverseString

// Do not edit below this line
module.exports = reverseString;
