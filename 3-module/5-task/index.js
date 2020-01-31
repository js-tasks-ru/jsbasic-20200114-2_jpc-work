/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
	if(a > b)
	{
		const c = a;
		a = b;
		b = c;
	}

	return arr.filter((elem) => {
		if(elem >= a && elem <= b)
			return true;
		return false;
	})
}
