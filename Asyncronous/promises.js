// A promise in the javascript is an object that represents the eventual completion (or failure) of an asyncronous operation.
// three states in promise 1) Pending 2) fulfilled 3)Rejected


// prommise  creation it takes a callback function with two parameters resolve and reject
function fetchData(){
    return new Promise((resolve,reject)=>{
        let success = true;
        setTimeout(() => {
            if(success){
                resolve("Data Fetched Successfully!");
            }
            else{
                reject("Error While Fetching the data");
        }
        }, 4000);
    })
        
}


// let a = fetchData()
// console.log(a);       // pending


fetchData().
then((data)=>{
    console.log(data);
    
}).then((data)=>{
    console.log("This is promise chainning.");
    
}).catch((error)=>{
    console.error(error);
    
})
