const name = 'Rushi'
const repoCount = 5

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);   // String Interpolation 

const gameName = new  String('freefire-max')

console.log(gameName[0]);
console.log(gameName.__proto__);  
  
console.log(gameName.length);
console.log(gameName.toUpperCase());
  
console.log(gameName.charAt(5));
console.log(gameName.indexOf('f'));

const newString = gameName.substring(0,6)

console.log(newString);

const anotherString = gameName.slice(2,10)
console.log(anotherString);


const trimString =  "       Remove spaces      " 
console.log(trimString);

console.log(trimString.trim());  // trim removes the unwanted spaces from the string


const url = "https://www.google%20.com"
console.log(url.replace('%20',''))

console.log(url.includes('google'))

console.log(gameName.split('-'));
