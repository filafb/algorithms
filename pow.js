//source: https://leetcode.com/problems/powx-n/discuss/?currentPage=1&orderBy=most_votes&query=

//Implement pow(x, n), which calculates x raised to the power n (x**n).
//time: O(n/2)
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

