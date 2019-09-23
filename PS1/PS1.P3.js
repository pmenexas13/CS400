// create function that takes a string and a function as input, and applies the input function on the string
const passStrToFunc = (str, func) => func(str)

// create function that takes a string and returns a list separating the input at beginning of each `c`
const splitByC = str => str.replace(/c/g, `?c`).split(`?`);

// create function that takes a string, and returns object with string modified to capitalize `a`
const capitalizeA = str => stringInfo  = {
    originalString: str,
    modifiedString: str.replace(/a/g, `A`),
    numberReplaced: str.split(`a`).length - 1,
    length: str.length
}

// print result of test cases
console.log(`The string split by c is: ${passStrToFunc(`supercalifragilisticexpialidocious`, splitByC)}`)
console.log(`The string info is: ${JSON.stringify(passStrToFunc(`supercalifragilisticexpialidocious`, capitalizeA),null,2)}`)