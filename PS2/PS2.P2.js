// create generator that takes a sentence, splits by spaces, and returns iterable array
function* splitSentence (sentence) {
    yield* sentence.split(" ");
}

// store the splitSentence generator in variable words
const words = splitSentence(`All I know is something like a bird within her sang`);

// loop through each word in generator, printing each word of sentence
for (word of words){
    console.log(word);
}