
document.addEventListener("click", function(e){
if(e.target.classList.contains('edit-me')){
let userInput = prompt("Nuevo Texto")
axios.post('/update-item', {text:userInput}).then(function(){
    //can be empty
}).catch(function(){
    console.log("try later")
})
}
}) 