/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  if(salaries === undefined || salaries === null)
    return 0;

  let result = 0;
  for(const key in salaries) {
    if (typeof salaries[key] === 'number')
    result += salaries[key];
  }
  return result;
}
