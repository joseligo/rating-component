const notes = document.querySelector('.notes').querySelectorAll('div')
const notesArray = Array.prototype.slice.call(notes);
const button = document.querySelector('button')
const rating = document.querySelector('.rating')
const result = document.querySelector('.result')
const resultSentence = document.querySelector('.result-select')
let choise = false
let noteChoise = 0
console.log(notes)

notesArray.forEach((note, index) => {
  note.addEventListener("click", ()=> {
    for(i=0; i< notes.length; i++){
      if(notes[i].classList.contains('select')){
        notes[i].classList.remove('select')
      }
    }
    notes[index].classList.add('select');
    choise = true;
    noteChoise = index + 1
    console.log(noteChoise)
  })
})
button.addEventListener('click',() => {
  if (choise) {
  rating.style.display = 'none';
  result.style.display = 'flex';
  resultSentence.innerHTML = `You selected ${noteChoise} out of 5`
  }
})