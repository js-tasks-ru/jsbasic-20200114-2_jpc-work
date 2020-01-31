/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
	let elem = document.createElement("ul");
	friends.forEach(item => {
		elem.innerHTML += "<li>" + item.firstName + " " + item.lastName + "</li>";
	})
	return elem;
}
