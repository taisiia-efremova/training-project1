
console.log(document.body.hasChildNodes());
//childNode is DOM collection . we can iterate with for of
// for(let node of document.body.childNodes) {
//   console.log(node);
// }

let arr = Array.from(document.body.childNodes);
let divs = document.querySelectorAll('div');
console.log(divs);
console.dir(divs);
console.log(  document.body.parentElement);

console.log(document.body.children);
console.log(document.body.childNodes);

let paragraph1 = document.body.querySelectorAll('#hidden');
paragraph1.hidden = true;



