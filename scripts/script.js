// Create an empty object to push things into
const spacem = {};

spacem.words = [
    "This sentence one lalalalalalala",
    "This sentence two lalalalalalala",
    "This sentence three lalalalalalala",
    "This sentence four lalalalalalala",
    "This sentence five lalalalalalala",
    "This sentence six lalalalalalala",
    "This sentence seven lalalalalalala",
    "This sentence eight lalalalalalala"
];

// Create an array with the words/phrases you want to use
const paragraph = ['Spacem ipsum '];
const generatedText = [];

function formSentences() {
	spacem.words.sort(function () {
		return 0.1 - Math.random();
	});
	var sentences = spacem.words.slice(0, 3).join(' ') + '. ';
	sentences = sentences.charAt(0).toUpperCase() + sentences.slice(1);
    paragraph.push(sentences);
    
    console.log(sentences);
}


// On submit, remove class of '.hiddenText' to reveal generated text (fades in)

// User can copy generated text by clicking on the '.copyMe' button

// User clicks on button to clear existing text and choose again