// Asyncronous = code doesn't wait for an operation to complete before moving to the next code 
// operations like setTimeOUt, fetch API, dtabase calis run in the background


// clouser = It is  a function that the remembers the variables from the outer function scope even after the outer function has finished executing

function outer(){
    let counter = 4
    return function inner(){
        counter++
        return counter
    }
}

let increment = outer()
console.log(increment());
console.log(increment());