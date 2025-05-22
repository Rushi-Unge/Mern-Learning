const accountId = 8774455
let accountEmail = "rushi@gmail.com"
var accountPassword = "5645214"
accountCity="Badnapur"

// accountId=56  // Not Allowed

console.log(accountId);

accountEmail = "rushi123@gmail.com"
accountPassword = "511111114"

accountCity="Mumbai"

/* 
prefer not to use var
 instead use const for variables that don't change and let for variables that change.
 const is a block-scoped variable, while let is a function-scoped variable.
 For example, let can be used inside a loop, but var cannot.
 const is preferred for variables that will not change, like accountEmail and accountId.
 let is preferred for variables that will change, like accountPassword and accountCity. 
*/



console.table([accountId,accountEmail, accountPassword, accountCity])
