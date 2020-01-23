/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if(str === undefined || str === null)
    return "\u2026";

  if(maxlength === undefined || maxlength === null)
    return "\u2026";

  maxlength = +maxlength;

  if(isNaN(maxlength))
    return "\u2026";

  if(str.length > maxlength)
    return str.slice(0, maxlength - 1) + "\u2026";

  return str;
}
