const ftoc = function(fehrenheit) {
  const celsius = (fehrenheit - 32) * 5 / 9
  return Math.round(celsius * 10) / 10
};

const ctof = function(celsius) {
  const fehrenheit = celsius * (9 / 5) + 32
  return Math.round(fehrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
