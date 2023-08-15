
const sumAll = function (a, b) {
    let sum = 0;
    if ((((typeof a) === "number") && ((typeof b) === "number")) && ((a > 0) && (b > 0))) { 
        if (a < b) {
            let i = a;
            while (i <= b) {
            sum += i;
            i++;
            }
        } else {
            let i = b;
            while (i <= a) {
                sum += i;
                i++;
            }
        }
        return sum;
    } else {
        return "ERROR";
    }
}
console.log(sumAll(23, 4))

// Do not edit below this line
module.exports = sumAll;
