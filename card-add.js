let state = [];
let title = document.querySelector('#title');
let task = document.querySelector('#task');
let btnAddCard = document.querySelector('#add-card-btn');
let divCardCollection = document.querySelector("#card-collection");
let cardElem = document.createElement("div");
let btnDeleteCard = document.querySelector(".delete-card-btn");


//Task List code
//##########################################################################################
//******************************************************************************************
//adding text values to array
let addText = function () {
  let titleText = title.value;
  let taskText = task.value;
  let id = Math.random().toString(32).substring(2);

  if (titleText, taskText, id) {
    function Task() {
      this.id = id;
      this.title = titleText;
      this.text = taskText;
    }
  }
  state.push(new Task());

  // state.push(titleText);
  // state.push(taskText);
  createCard(titleText, taskText, id);
  title.value = ' ';
  task.value = ' ';
}

let createCard = function (titleText, taskText, id) {
  divCardCollection.insertAdjacentHTML("beforeend",
    `<div class="card" IdPersonal="${id}" >
    <h4>${titleText}</h4>
     <p>${taskText}</p>
     <button  class="delete-card-btn">Delete</button>
    </div>`);
  console.log(state)
};


let textCardHandler = function (event) {
  if (this && event.target.closest('.delete-card-btn')) {
    const card = event.target.closest('.card');
    const id = event.target.textContent;

    card.remove();


    deleteText(card);

  }
};
// let deleteState = function () {
//
// }


let deleteText = function () {
  console.log( state);
  state.shift();
  console.log( state);
  // const index = state.findIndex(el => el === );
  // state.splice(index, 1);
  // // card.remove();
};

//card listeners
btnAddCard.addEventListener('click', addText);
divCardCollection.addEventListener('click', deleteValues);
divCardCollection.addEventListener('click', textCardHandler);