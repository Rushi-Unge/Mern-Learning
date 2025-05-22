

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers // function reference // gives no output
// addTwoNumbers(4,5) // function call

function addTwoNumbers(num1,num2){  // num1 and num2 are function Parameters
    // let result = num1+num2;
    // return result;

    return num1+num2;
}

const result=addTwoNumbers(4,5) // function call (4,5 )are the function arguments
console.log("Result: " + result);

function loginUserMessage(username){ // we can pass the default value to avoid undefined
    return `${username} just Logged in`;
}

console.log(loginUserMessage("Rushi"));  // Rushi just Logged in
console.log(loginUserMessage(""));  //  just Logged in
console.log(loginUserMessage());  // undefined just Logged in


function calculateCartPrice(...num1){  // ... is a rest and spred operator here it is used as rest operator
    return num1;
}

console.log(calculateCartPrice(10,12,41,54));  // this function is used when we dont know the numeber of arguments passed 

const user={
    username:"Rushi",
    price:200,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);   
}

// handleObject(user)

handleObject({
    username:"sam",
    price:600,
})



const myNewArray = [200,500,4,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([1,0,5,10]));


