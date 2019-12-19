let valsArray = [];
let divField = document.querySelector('#list');
let btnAdd = document.querySelector('#add-btn');
let btnDelete = document.querySelector('#delete-btn');
let input = document.querySelector('#input');
let total = document.querySelector("#total span");
let list = document.createElement("ul");


let createListItem = function (number) {
  list.insertAdjacentHTML("afterbegin", `<li class="list-item">${number}</li>`);

};
//1.add a new value to the list of numbers
let addValue = function () {
  let number = +input.value;

  if (number) {
    valsArray.push(number);
    console.log(valsArray);
   createListItem(number);
    input.value = '';
    // calcResult();
  }
};




//1.calculate a total result of the  list
// let calcResult = function () {
//   if (valsArray.length > 0) {
//     const result = valsArray.reduce(function (accum, el) {
// console.log(valsArray)
//       return accum += el;
//
//     });
//     total.textContent = '9';
//   } else {
//     total.textContent = "0";
//   }
//
// };


let listHandler = function (event) {
  if (event.target !== this) {
    const num = Number(event.target.textContent);
    const li = event.target;
    deleteNumber(num, li);
    // calcResult();
  }
};


let deleteValues = function () {
  // console.log(list.childNodes);
  // console.log(Array.from(list.childNodes));
  // while (list.hasChildNodes()) {
  //   list.removeChild(list.firstChild);
  // }

  // for (let elem of Array.from(list.childNodes)) {
  //   elem.remove();
  //   console.log(elem);
  // };
  Array.from(list.childNodes).forEach(function (li) {
    li.remove();
  });

  valsArray = [];
  total.textContent = 0;
  // console.log('delete');
  // console.log(valsArray);
};

let deleteNumber = function (number, li) {
  const index = valsArray.findIndex(el => el === number);
  valsArray.splice(index, 1);
  li.remove();
};





//List listeners
btnAdd.addEventListener('click', addValue);
btnDelete.addEventListener('click', deleteValues);
list.addEventListener('click', listHandler);

