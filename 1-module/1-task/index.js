/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
   n = +n;

  if(isNaN(n) || n === undefined || n === null)
    return 0;

  let result = 1;
  
  for(i = 2; i <= n; ++i)
      result *= i;
  return result;
}
