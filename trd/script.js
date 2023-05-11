const truths = [
	"What's the most embarrassing thing that's ever happened to you?",
	"Have you ever cheated on a test?",
	"What's the worst gift you've ever received?",
	"What's your biggest fear?",
	"Have you ever lied to get out of trouble?",
];

const dares = [
	"Sing a song in the meeting.",
	"give a dare to the random person in the meeeting .",
	"",
	"Tell a joke that's so bad it's good.",
	"Send a random text to someone in your phonebook.",
];

function generateQuestion() {
	const randomNumber = Math.floor(Math.random() * 2);
	let question;

	if (randomNumber === 0) {
		const randomTruthIndex = Math.floor(Math.random() * truths.length);
		question = truths[randomTruthIndex];
	} else {
		const randomDareIndex = Math.floor(Math.random() * dares.length);
		question = dares[randomDareIndex];
	}

	document.getElementById("question").innerHTML = question;
}
