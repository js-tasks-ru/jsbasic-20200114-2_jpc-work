/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
	let employees = data.filter(employee => employee.age <= age).map(employee => {return employee.name + ", " + employee.balance;});
	return employees.join("\n");
}
