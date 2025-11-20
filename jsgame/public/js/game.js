let secretNumber;
let attempts;
let success = 0;

document.querySelector('#isHardMode').checked = false; // Thank you HTML
let hardMode = false;

function newGame() {
	secretNumber = Math.floor(Math.random() * 20) + 1;
	attempts = 0;
	console.log('--- NOVA HRA ---');
	console.log(`Secret number is ${secretNumber}`);
	document.querySelector('#attempts').innerText = attempts;
	document.querySelector('#isHardMode').disabled = true;

	if (document.querySelector('#success-text') || document.querySelector('#fail-text')) {
		try {
			document.querySelector('#success-text').remove();
			document.querySelector('#fail-text').remove();
		} catch (err) {
			console.log(err);
		}
	}

	if ((document.querySelector('#guess') || document.querySelector('#guessBtn')) == null) {
		let inputBar = document.createElement("input");
		inputBar.type = "number";
		inputBar.id = "guess";
		inputBar.min = "0";
		inputBar.max = "100";

		let guessBtn = document.createElement("input");
		guessBtn.type = "button";
		guessBtn.id = "guessBtn";
		guessBtn.value = "Submit";

		document.querySelector('#game-input').appendChild(inputBar);
		document.querySelector('#game-input').appendChild(guessBtn);

		document.querySelector('#guessBtn').addEventListener('click', checkGuess);
		document.querySelector('#guess').addEventListener('keydown', (e) => {
			if (e.keyCode == 13) {
				checkGuess()
			}
		});
	}

	document.querySelector('#guess').disabled = false;
	document.querySelector('#guess').value = "";

	if (document.querySelector('#isHardMode').checked === true) {
		document.querySelector('#isHardMode').disabled = true;
	}
}

function checkGuess() {
	let guess = document.querySelector('#guess');
	let guessInt = parseInt(guess.value);

	if (!isNaN(guessInt) && (0 <= guessInt && guessInt <= 20)) {
		if (parseInt(guessInt) === secretNumber) {
			attempts++
			success = 1;
			console.log("Success!");
			guess.style = "animation: pulseGreenToBg 2s cubic-bezier(0.19, 1, 0.22, 1) 1";
			setTimeout(() => {
				guess.style = ""
			}, 1500);

			let successText = document.createElement('p');
			successText.textContent = "Number guessed successfully!";
			successText.id = "success-text";
			successText.style = "color: #a3be8c;";
			document.querySelector('#game-content').appendChild(successText);
			document.querySelector('#isHardMode').disabled = false;
			return;

		} else {
			attempts++
			guess.style = "animation: pulseRedToBg 2s cubic-bezier(0.19, 1, 0.22, 1) 1";
			setTimeout(() => {
				guess.style = ""
			}, 1500);
			document.querySelector('#attempts').innerText = attempts;
		}
	} else {
		guess.style = "animation: pulseYellowToBg 2s cubic-bezier(0.19, 1, 0.22, 1) 1";
		setTimeout(() => {
			guess.style = ""
		}, 1500);
	}

	if (hardMode) {
		if (attempts >= 10 && hardMode) {
			let failText = document.createElement('p');
			failText.textContent = `Ran out of attempts! The number was: ${secretNumber}`;
			failText.id = "fail-text";
			failText.style = "color: #bf616a;";
			document.querySelector('#game-content').appendChild(failText);

			guess.disabled = true;
			document.querySelector('#isHardMode').disabled = false;
		}
	}
}

document.querySelector('#newGameBtn').addEventListener('click', newGame);
document.querySelector('#isHardMode').addEventListener('click', (e) => {
	hardMode = !hardMode;
});
