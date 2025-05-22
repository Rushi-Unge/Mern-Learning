"use strict";  // treat all JS code as newer version

// alert(3+3) // we are using nodejs not browser

let name="Rushi"
let age =22
let isloggedIn=false

// number => 2 to power 53
//bigint
//String => "" or ''
// boolean => true or false
//null => standalone value
//undefined =>
// symbol => unique
//object

console.log(typeof name)
console.log(typeof null);
console.log(typeof undefined);

// Primitive data type are call by value type 
// 7 Types : string, Number, Boolean, null, undefined ,symbol ,bigInt 
const score = 100
const scoreValue =112.23
 const isLoggedIn = false
 const outsideTemp = null 
 let useremail;
  
 const id = Symbol('123')    // symbol are used for unique declaration 
 const anotherId = Symbol('123')   

 console.log(id === anotherId);
 
 const bigNumber = 564874123184n
// javascript is dynamicallytyped language 

// Reference type (Non primitive)
// array , objects ,functions

const heros= ["shaktiman","naagraj","doga"]

let myObj = {
    name:"Rushi",
    age:23,
    
}

const myFunction = function () {
    console.log("Hello Javascript!");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof id);
console.log(typeof heros);
console.log(typeof outsideTemp);



// ===================================================
// stack (Primitive) , heap (Non- primijtive)

let myName = "Rushi"
let anotherName = name

anotherName = "Rushikesh"

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "userOne.email.com",
    upi: "userOne.upi",
}

let userTwo = userOne

userTwo.email = "rushikesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
