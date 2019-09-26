// create generator that yields the fibonacci sequence
function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        yield val1
        result = val1+val2
        val1 = val2
        val2 = result
    }
}

// create generator that yields only the even fibonacci numbers
// points to fibs generator to get all fibonacci numbers to filter for even
function* evenFibs () {
    myFibs = fibs()
    while (true) {
        let val = myFibs.next().value
        if (val % 2 != 0) {
            myFibs.next()
        } else {
            yield console.log(val)
        }
    }
}
// store evenFibs generator to call in loop
myEvenFibs = evenFibs()

// set counter for how many evenFibs we want and run loop
let count = 6;
while (count --> 0) {
    myEvenFibs.next()
}