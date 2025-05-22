const user = {
    username : "Rushi",
    price:600,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}

user.welcomeMessage()
user.username = "Karan";
user.welcomeMessage()

console.log(this);  // it gives and {} empty object 

// function test(){
//     console.log(this);
// }

// test()
  
const fun = function (){
    let username = "test";
    console.log(this.username);
    
}
fun()
//  arrow function

const arrowfun = () => {
    let username = "test";
    console.log(this);
    
}

arrowfun()

// const addTwoNum = (num1, num2) => {   // explicit return
//     return num1 + num2;
// }

// const addTwoNum = (num1, num2) => num1 + num2; // Implicit return

const addTwoNum = (num1, num2) => (num1 + num2); // Implicit return and paranthesis


console.log(addTwoNum(6,4));

// const myarrays = ["a", "b", "c", "d"]
// myarrays.forEach() => () {

// }