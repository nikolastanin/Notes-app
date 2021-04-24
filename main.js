
let notes = [];

let textInput = document.getElementById("textInput");

let x ;
let delItem = [];
// Submit value function

let newNote = ()=>{
     // adds value to holder variable
     notes.push(textInput.value); 
     
    //  check if empty and create note elements
     if(textInput.value!=0){
      let   div = document.createElement('div');
      let   button = document.createElement('button');
         button.innerHTML = "delete me"
       
        div.className ="note"
//adding notes when add button clicked
        for(let i = 0; i<notes.length; i++){
              //add note to array 
            div.innerHTML = notes[i];
            
              //add custom ID 
              div.id = "noteIndex"+[i];
           
             document.body.appendChild(div);
             document.body.appendChild(button);
             button.setAttribute("onclick","deleteNote("+i+")");
             button.setAttribute("id","button"+i);

         }
    
           
     }
     else{
         textInput.placeholder ="Please enter some text";
     }
     
     
    
}
let deleteNote = (n) =>{
 console.log(n);
  let deleteNote = document.getElementById("noteIndex"+n);
  let deleteButton = document.getElementById("button"+n)
    console.log(deleteNote);
    deleteNote.remove();
    deleteButton.remove();
   }



