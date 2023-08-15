const convertToCelsius = function(f) {
  let x = (((f - 32) * 5) / 9);
  return Number(x.toFixed(1));
};




const convertToFahrenheit = function(c) {
  let y = (((c * 9) / 5) + 32);
  return Number(y.toFixed(1));
};

//.toFixed()

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
