console.log("hello");
let string = 'jdks sdfs dfk e t d ';
let someArr = [];
for (let elem of string) {
  if(elem != " ")
  {someArr.push(elem)};

}
console.log(someArr);
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};
let arr = Array.from(arrayLike);
console.log(arr);

let newStr = "My really new array string ";
let newArr = Array.from(newStr);
console.log(newArr);
