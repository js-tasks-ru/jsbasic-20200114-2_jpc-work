/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  if(str === undefined || str === null)
    return false;

  str = str.toLocaleLowerCase();

  if(str.includes("1xbet") || str.includes("xxx"))
    return true;

  return false;
}
