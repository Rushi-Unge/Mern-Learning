document.getElementById('changeTextButton').addEventListener('click',function (){
    let paragraph = document.getElementById('myParagraph');
    paragraph.textContent = "The paragraph is changed"
    
})


document.getElementById('highlightFirstCity').addEventListener('click',function (){
    let citiesList=document.getElementById('citiesList');
    citiesList.firstElementChild.classList.add('highlight')

})

document.getElementById('changeOrder').addEventListener('click',function (){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent="Espresso";

    coffeeType.style.backgroundColor="brown";
    coffeeType.style.padding="5px";
})


document.getElementById("addNewItem").addEventListener("click",function (){
    let newItem=document.createElement('li')
    newItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newItem)

})

document.getElementById("removeLastTask").addEventListener("click",function (){

    let taskList=document.getElementById("taskList");
    taskList.lastElementChild.remove()
})

document.getElementById("clickMeButton").addEventListener("dblclick",function (){
    alert("chaicode")
});

document.getElementById("teaList").addEventListener("click",function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert("You Selected: "+event.target.textContent);
    }  
})


document.getElementById("feedbackForm").addEventListener('submit',function (event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent =`Feedback is: ${feedback}`;
})


//example 9
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("domStatus").textContent = "DOM fully loaded";
})

document.getElementById("toggleHighlight").addEventListener("click", function (){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
});