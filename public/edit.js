
document.addEventListener("click", function(e){
if(e.target.classList.contains('edit-me')){
let userInput = prompt("Nuevo Texto")
console.log(userInput)
}
}) 