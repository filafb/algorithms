
function myPow(x, n) {
  if (x === 0) return 0;
  if (n === 0 || x === 1) return 1;
  let isNegative = n < 0;
  let base2 = Math.abs(n) >> 1;
  let remainder = n % 2;
  let base = 1;
  while (base2) {
    base2--;
    base *= x * x;
  };
  let finalBase = remainder ? base * x : base;
  return isNegative ? 1 / finalBase : finalBase

};

module.exports = myPow

