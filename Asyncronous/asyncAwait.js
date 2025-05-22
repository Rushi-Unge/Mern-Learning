function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name:"Krishna",url:"https://krishna.com"})
        }, 3000);
    })
}


async function getUserData() {
    try {
        console.log('Fetching User Data.....');
        const userData= await fetchUserData()
        console.log("user data Feched successfully");
        console.log("User Data:",userData);
        
    } catch (error) {
        console.log("Error Fetching the Data",error);
        
    }
}
getUserData();


// example 2

function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post Data Fetched.")
        }, 2000);
    })
    }

    function fetchCommentData(){
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("Comment data Fetched.")
            }, 3000);
        });
    }

    async function getBlogData() {
        try {
            console.log("Fetching blog data...");
            // const postData=await fetchPostData()
            // const commentData = await fetchCommentData()

            const [postData,commentData] = await Promise.all([fetchPostData(),fetchCommentData()]);

            console.log(postData,);
            console.log(commentData);
            
            console.log("Fetch completed");
            
        } catch (error) {
            console.error("Error fetching the  blog data",error);
            
        }
    }

    getBlogData()