
// // Javascript Arrays are resizable and also supported to mixed data types
// // creates the shallow copy of the array - cahnges done in the copy change the original array to


// const myArr =[0,12,2,3,4,23]
// // console.log(myArr);

// const myHeros = ["ran","shyam"]
// // console.log(myHeros);


// const myArr2 = new Array(54,55,53,1,54,56,5,4,5,6,4)
// // console.log(myArr2);

// //Array methods
// myArr.push(6);  // Add the value to the end of the array
// myArr.push(5);
// myArr.pop(); // Removes the last value from the array
// console.log(myArr);

// myArr.unshift(9) // Adds the value at the start of the array
// myArr.shift(); // Removes the first value from the array

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(23));

// const joinArr= myArr2.join();  // join method adds the array and returns the string output
// console.log(joinArr);


// // slice , splice 
// console.log("A ",myArr);

// const myn1= myArr.slice(0,3) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// console.log(myn1);

// const myn2 = myArr.splice(1,3); //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(myn2);

// console.log("C ",myArr);

// let myArr = new Array(1,24,52,2);
// const myArrArr =myArr.slice(0,3)
// console.log(myArrArr);

// const myn3 = myArr.splice(0,3,5)  // We can also add the array elements  
// console.log(myn3);
// console.log("C ",myArr);


// Arrays 2

const marvel = ['thor','ironman','spiderman']
const dc = ['superman','flash','batman']

// marvel.push(dc)  // Array in array 
// console.log(marvel);

// let allheros=marvel.concat(dc) //concat return a new array to the values of both the array
// console.log(allheros);

const allNewHeros = [...marvel,...dc] //spread operator used like concat 
console.log(allNewHeros);

const another_array = [1,1,3,[5,4,6],7,8,[9,10,11]]
const real_another_array = another_array.flat(Infinity)  // flat adds all the arraty ion one array 
console.log(real_another_array);

console.log(Array.isArray("Rushikesh"));
console.log(Array.from("Rushikesh"));// converts string to the Array
console.log(Array.from({name:"Programming"}));  // it gives empty array

let score1= 100
let score2= 300
let score3= 400

console.log(Array.of(score1,score2,score3)); // [ 100, 300, 400 ]





