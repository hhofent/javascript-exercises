let string = "hey";
let num = 3;

const repeatString = (string,num) => {
    if (num >= 0) {
        let i = 0;
        let newstring = "";
        while (i < num) {
            newstring += string;
            i++;
        }
        return newstring;
    } else {return "ERROR"};
}
repeatString

// Do not edit below this line
module.exports = repeatString;
