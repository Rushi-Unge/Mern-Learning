//Module import file

// default import
import multiply from "./moduleexport.js";

//named import
import { add,substract } from "./moduleexport.js";


console.log(add(2,3));
console.log(substract(5,1));
console.log(multiply(2,2));


