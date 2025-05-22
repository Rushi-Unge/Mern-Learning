// Imediately Invoked Function Expression (IIFE)

(function db(){
    // named IIFE
    console.log('DB Connected');
})();
// Imediately Execute the function
// ()()  first parentheses to wrap and second to call the function
// IIFE to avoid the global scope declaration problems

( (name) => () {
    //Simple IIFE
    console.log(`DB COnnected by arrow function ${name}`);
    
})("Krishna");


