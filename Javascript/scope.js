
let a = 100
const b = 200
var c= 300


if (true){
    let a = 10
    const b = 20
    var c= 30
}
console.log(a); // 100 
console.log(b); // 200 
console.log(c); // 30


function one(){
    const username= "Rushi"

    function two(){
        const website="google"
        console.log(username);
    }
    // console.log(website);

    two()
}

one() 


if (true){
    const name= "ramesh"
    if(name==="ramesh"){
        const age= 20
        console.log(`My name is ${name} and age is ${age}`);
        
    }
    // console.log(age); //its not accisible out of the scope
    
}
// console.log(name); 


// **************************** //

function addone(num){
    return num + 1;
}

addone(5);

const addTwo = function(num){   // declares a function and holds it in a variable
    return num + 2;
}

addTwo(5);