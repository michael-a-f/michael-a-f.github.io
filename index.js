function flipCard(cardID) {
	let card = document.querySelector(`#${cardID}`);
	if (card.className === "flip-card") {
		card.className = "flip-card-flipped";
	} else {
		card.className = "flip-card";
	}
}
