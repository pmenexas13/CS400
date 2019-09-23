// create function that separates each character of string and then utilize sort function on list
const alphabetize = items => items.split("").sort();

// print result of test case
console.log(`Alphabetical order of the letters is: ${alphabetize(`supercalifragilisticexpialidocious`)}`)