/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) 
{
	let data = str.split(',');
	let result = {};

	for(let i =0; i < data.length; ++i)
	{
		let data2 = data[i].split(' '); 
		for(let j = 0; j < data2.length; ++j)
		{
			if(isNaN(data2[j]))
				continue;

			if(result.min === undefined)
				result.min = +data2[j];
			else
				if(result.min > +data2[j])
					result.min = +data2[j];

			if(result.max === undefined)
				result.max = +data2[j];
			else
				if(result.max < +data2[j])
					result.max = +data2[j];

		}
	}

	return result;
}
