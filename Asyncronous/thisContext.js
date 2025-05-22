const person ={
    name:"Rushi",
    greet(){
        console.log(`Hi, I am ${this.name}`);
        
    },
};

person.greet();

const greetFunction = person.greet
greetFunction()

const boundGreet = person.greet.bind({name:"John"});
boundGreet();


// this has three methods 
// 1)call() = takes single parameter 
// 2)apply() = takes an array of arguments
// 3)bind() = Returns a new function with this bound.

 // Example 2
