let myDate = new Date()
console.log(myDate.toString()); // Wed Mar 05 2025 14:15:27 GMT+0530 (India Standard Time)

console.log(myDate.toTimeString()); //14:16:01 GMT+0530 (India Standard Time) 

console.log(myDate.toLocaleString()); // 2025-03-05T08:50:54.200Z


console.log(myDate.toISOString()); //2025-03-05T08:46:34.483Z

console.log(myDate.toDateString()); // Wed Mar 05 2025
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2026,0,25)  // Month starts from 0

let myCreatedDate = new Date("07-03-2025");

console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getUTCMonth() + 1);

console.log(newDate.getDay());
console.log(newDate.toLocaleString(
     'default',{
        weekday:"long",
        timeZone:"UTC",
      
        
     }
));
