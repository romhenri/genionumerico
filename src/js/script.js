// Sorteio do Número Secreto

var secretNumber = parseInt(Math.random() * 100);
const tryTimes = document.getElementById("tryTimes");
const MSG = document.getElementById("msgSpace");
const NUM = document.getElementById("numberSpace");
const TRY = document.getElementById("tryB");
const INF = document.getElementById("info");
var tries = 0;
var used = [];

tryTimes.innerHTML = "Tentativas: " + tries;

console.log(secretNumber);
console.log(used);

// Botão de Tentar

function play() {
	console.log("Tentou!");

	var cn = window.document.getElementById("n");
	var chosenNumber = Number(cn.value);

	tries = tries + 1;
	tryTimes.innerHTML = "Tentativas: " + tries;

	console.log(`Jogador escolheu tentar com ${chosenNumber}`);

	if (chosenNumber == secretNumber) {
		// Cenários de Acertos
		let change = window.document.getElementById("genius");
		change.src = "src/img/genius-sad.png";

		MSG.innerHTML = `
            <p>Você venceu o misterioso gênio!</p>`;
		MSG.style.backgroundColor = "#edc949";
		MSG.style.color = "rgb(62, 38, 0)";
		NUM.style.backgroundColor = "#edc949";
		NUM.style.color = "rgb(62, 38, 0)";
		NUM.style.fontFamily = "Comicbon";
		NUM.style.fontSize = "20px";
		NUM.innerHTML = `Número ${chosenNumber}`;
		TRY.style.opacity = 0;

		if (localStorage.record == undefined) {
			localStorage.setItem("record", tries);
		} else if (tries < localStorage.record) {
			localStorage.setItem("record", tries);
		}
		load();

		if (tries == 1) {
			console.log("Acertou!");

			alert("Você ganhou! com uma única tentativa, uau!");
		} else if (tries > 1) {
			var changeHuman = window.document.getElementById("humanDefault");
			changeHuman.src = "src/img/human-default.png";

			alert(`Você ganhou! com ${tries} tentativas, Parabéns!`);
		}

		// Cenários de Erros

		// Número Inválido
	} else if (chosenNumber == NaN || chosenNumber == 0) {
		alert("Escolha um número para tentar.");

		tries = tries - 1;

		tryTimes.innerHTML = "Tentativas: " + tries;

		// Número Fora das Opções
	} else if (chosenNumber > 100) {
		alert("O número pensado pelo gênio está entre 1 e 100.");
		console.log("Número fora das opções.");

		tries = tries - 1;
		tryTimes.innerHTML = "Tentativas: " + tries;
	} else if (used.includes(chosenNumber)) {
		console.log("Repetição detectada!");
		alert("Você já tentou esse número.");

		tries = tries - 1;
		tryTimes.innerHTML = "Tentativas: " + tries;
	} else if (!used.includes(chosenNumber)) {
		// Secreto < Escolhido

		console.log("Tentativa Nova");

		if (chosenNumber > secretNumber) {
			alert("Erro! o número secreto é menor.");

			console.log("Erro! o número secreto é menor.");

			if (tries >= 5) {
				var changeHuman = window.document.getElementById(
					"humanDefault"
				);
				changeHuman.src = "src/img/human-not-good.png";

				used.push(chosenNumber);
				used = used.sort(function (a, b) {
					return a - b;
				});
				console.log(used);
			} else {
			}
		} else if (chosenNumber < secretNumber) {
			// Secreto > Escolhido

			alert("Erro! o número secreto é maior.");
			console.log("Erro! o número secreto é maior.");

			if (tries >= 5) {
				var changeHuman = window.document.getElementById(
					"humanDefault"
				);
				changeHuman.src = "src/img/human-not-good.png";
			}

			used.push(chosenNumber);
			used = used.sort(function (a, b) {
				return a - b;
			});
			console.log(used);
		}
	}
}

// Teclas para tentar

window.addEventListener("keydown", (event) => {
	console.log(event);

	if (event.key == "Enter" || event.which == "32") {
		play();
	}
});

// Botão de Reiniciar

function reload() {
	window.location.reload();
}

// Botão de Continuar

function load() {
	if (localStorage.record == undefined) {
		INF.innerHTML = `
    
        Seu Record: 0 tentativas.
    
    
    `;
	} else {
		if (localStorage.record == 1) {
			INF.innerHTML = `
    
            Seu Record: ${localStorage.record} única tentativa.
        
    
        `;
		} else {
			INF.innerHTML = `
    
            Seu Record: ${localStorage.record} tentativas.
        
    
        `;
		}
	}
}
