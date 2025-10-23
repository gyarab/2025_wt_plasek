function updateDate() {
	let dateText = document.getElementById('date-text');
	let currDate = new Date();
	dateText.textContent = `Today is ${currDate.getDay()}. ${currDate.getMonth()}. ${currDate.getFullYear()}, ${currDate.getHours()}:${currDate.getMinutes() < 10 ? '0' + currDate.getMinutes() : currDate.getMinutes()}`;
}

updateDate(); // run it once initially
setInterval(updateDate, 1000);

function handleSearchBarKeypress(event) {
	if (event.keyCode == 13) {
		window.location.href = `https://duckduckgo.com/?q=${document.querySelector('#search-bar-value').value}`;
	}
}
