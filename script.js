let createbtn = document.getElementById('editbtn');
let notecontainer = document.querySelector('.note-container');
let notes = document.querySelectorAll('.inputbox');

function showNotes(){
    notecontainer.innerHTML = localStorage.getItem('notes')
}

showNotes();

function updateSorage(){
    localStorage.setItem('notes' , notecontainer.innerHTML);
    updateSorage()
}


createbtn.addEventListener('click' , (() => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'inputbox';
    inputBox.setAttribute('contenteditable' , 'true');
    img.src = 'delete.png';
    notecontainer.appendChild(inputBox).appendChild(img)
}))


// let clutter = "";
// createbtn.addEventListener('click' , (() => {   
//  clutter +='<p contenteditable="true" class="inputbox"> <img src="delete.png" alt=""></p>'
//  notecontainer.innerHTML = clutter;

// }))--> bugs


notecontainer.addEventListener('click' , ((e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
    else{
        e.target.tagName === "p";
        notes = document.querySelectorAll('inputbox');
        notes.entries( nt => {
            nt.onekeyup = function(){
                updateSorage();
            }
        })
    }
}))




