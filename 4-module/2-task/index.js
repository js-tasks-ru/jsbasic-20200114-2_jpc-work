/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
	for(let i = 0; i < table.rows.length; ++i)
	{
		if(table.rows[i].cells[i] === undefined)
			continue;

		table.rows[i].cells[i].style.cssText = "background-color: red;";
	}
}
