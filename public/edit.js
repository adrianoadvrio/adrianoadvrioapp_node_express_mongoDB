
document.addEventListener("click", function(e){
   
  if(e.target.classList.contains('edit-me')){
  let userInput = prompt("Nuevo Texto")
  
   axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function(){
     // for the next video
   }).catch(function(){
     console.log("Intente otra vez")
   })
      
  }    
 })   
 