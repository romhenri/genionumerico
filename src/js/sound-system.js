//: Music System

const muteBtn = document.getElementById("muteBtn");
var myMusic = new Audio("src/music/turkish-beat.mp3");
var vol = 0.1;

//: Actions

muteBtn.addEventListener("click", () => {
	if (muteBtn.classList.contains("fa-volume-xmark")) {
		playMusic(1);
	} else {
		playMusic(0);
	}

	muteBtn.classList.toggle("fa-volume-xmark");
});

//: Functions

function playMusic(mode) {
	if (mode == 1) {
		myMusic.play();
		myMusic.volume = vol;
	} else if (mode == 0) {
		myMusic.play();
		myMusic.volume = 0;
	}
}
