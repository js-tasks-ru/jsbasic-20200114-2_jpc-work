/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
	for(let r = 1; r < table.rows.length; ++r)
	{
		if(table.rows[r].cells[3].dataset.available == undefined)
		{
			table.rows[r].classList.contains("unavailable") && table.rows[r].classList.remove("unavailable");	
			table.rows[r].classList.contains("available") && table.rows[r].classList.remove("available");
			table.rows[r].setAttribute("hidden",true);
		}
		if(table.rows[r].cells[3].dataset.available == "true")
		{
			table.rows[r].classList.contains("unavailable") && table.rows[r].classList.remove("unavailable");
			table.rows[r].classList.add("available");
		}
		else
		{
			table.rows[r].classList.contains("available") && table.rows[r].classList.remove("available");
			table.rows[r].classList.add("unavailable");			
		}

		if(table.rows[r].cells[2].innerHTML == "m")
			table.rows[r].classList.add("male");
		if(table.rows[r].cells[2].innerHTML == "f")
			table.rows[r].classList.add("female");		

		if(+table.rows[r].cells[1].innerHTML < 18)
			table.rows[r].style.cssText = "text-decoration: line-through";
	}
}
