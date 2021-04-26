
  let notes = [];
  let textInput = document.getElementById("textInput");
  let  notesList = document.getElementById("notesList");

// Submit value function

let newNote = ()=>{
     // adds text value to holder variable
     notes.push(textInput.value); 
     
    //  check if empty and create div note elements
     if(textInput.value!=0){
       let   p = document.createElement('p');
      let   button = document.createElement('button');
     let noteElement = document.createElement("div");
     noteElement.setAttribute("class","noteElement");
     
        p.className ="note"
//adding notes when add button clicked
        for(let i = 0; i<notes.length; i++){
           //add input value to div content
            p.innerHTML = notes[i];
            button.innerHTML = "delete"
          //adding custom IDs so we can delete exact notes 
            //  div.id = "noteIndex"+[i];
            noteElement.setAttribute("id","noteIndex"+i);
            //  document.body.appendChild(div);
            //  document.body.appendChild(button);
             button.setAttribute("onclick","deleteNote("+i+")");
             button.setAttribute("id","button"+i);
            notesList.appendChild(noteElement);
            noteElement.appendChild(p);
            noteElement.appendChild(button);
         }
    
           
     }
    //  displaying a warning when input is empty
     else{
        textInput.placeholder ="Please enter some text...";
       
     }
     
     
//  Deleting a note   
}
let deleteNote = (n) =>{
 console.log(n);
  let deleteNoteElement = document.getElementById("noteIndex"+n);
  // let deleteButton = document.getElementById("button"+n)
    // console.log(deleteNote);
    // deleteNote.remove();
    // deleteButton.remove();
    deleteNoteElement.remove();
   }

  //  Created by Nikola Stanin 24.04.2021. 

