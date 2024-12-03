const notesContainer = document.querySelector('.notesContainer');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function ShowNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes")
}
ShowNotes(); 

function updatestorage() {
  localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/illustration/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})  

notesContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updatestorage();
  }else if (e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function () {
        updatestorage();
      }
    })
  }
})
