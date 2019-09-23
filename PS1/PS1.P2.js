// create function that adds spaces in between digits and operation, and then utilize eval to get result
const evaluate = expression => eval(expression[0] + " " + expression[1] + " " + expression[2]);

// test cases
const expr = `4+2`
// const expr = `5*7`
// const expr = `6-1`
// const expr = `9/2`
// const expr = `8%3` 

// print result of test case
console.log(`${expr} = ${evaluate(expr)}`)