// singleton = its created by constructor only
// object.create 


const mySym = Symbol("key1")

// object literals
const jsUser = {
    name:"Rushi",
    [mySym]:"mykey1",  //Symbol is written in square bracket in object as a key
    age:22,
    location:"badnapur",
    email:"rushikeshunge@gmail.com",
    isLoggedIn:false,
}

console.log(jsUser.email); 
console.log(jsUser["email"]); // way to access the object
console.log(jsUser[mySym]); // way to access the object

jsUser.email = "rushi.google.com";
// Object.freeze(jsUser);  // no changes will applied
jsUser.age=34

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
    
}
jsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(jsUser.greeting); // undefined output
console.log(jsUser.greeting()); 

console.log(jsUser.greetingtwo());


//OBJECT SINGLETON CONSTERUCTOR

// const user = new Object()
const user = {}
user.id = "156jhsdv"
user.name="Ranjit"
user.isLoggedIn=false

console.log(user);

const regularUser = {
    email:"ranjit@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ranjit",
            lastname:"Kumar",
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1={1:"a", 2:"b", 3:"c", 4:"d"}
const obj2={0:"a", 1:"b", 2:"c"}

const obj3=Object.assign({}, obj1, obj2)

const obj4={...obj1, ...obj2}  //spread used to combine objects
console.log(obj3);
console.log(obj4);

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'));

// Destructuring object

const course = {
    coursename:"Javascript",
    price:"1000",
    courseInstructor:"hitesh sir"
}

const {courseInstructor: instructor} = course
console.log(instructor);
