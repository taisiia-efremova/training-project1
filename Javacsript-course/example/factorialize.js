//Check if there is the target string in the end of the current str;

// function confirmEnding(str, target) {
//
//   let arr = str.split('').reverse();
//   let arrStr = target.split("").reverse();
// let counter = 0;
// for(let i = 0; i < arrStr.length; i++) {
//
//   if(arr[i] != arrStr[i]) {
//
//     counter++;
//   }
//
// }
// if (counter > 0) {
//   return false
// } else {
//   return true;
// }
//
// }
//
// console.log(confirmEnding("Bastian", "n"));
// // console.log(confirmEnding("He has to give me a new name", "name"))
// // confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
// console.log(confirmEnding("Open sesame", "game"))

// function findElement(arr, func) {
//
//   let arrNew = [];
//   arr.forEach(i => func(i) == true ? arrNew.push(i) : i);
//   console.log(arrNew);
//   if(arrNew.length > 0) {
//     return arrNew[0];
//   }else {
//     return undefined;
//   }
// }
// findElement([1, 2, 3, 4], num => num % 2 === 0);
//
//
// findElement([1, 2, 3, 4], num => num % 2 === 0);
// console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))


function titleCase(str) {

  let newArr = [];
  let newStr = str.toLowerCase();
let arr = newStr.split(" ");

for(let i = 0; i < arr.length; i++) {



  newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1,arr[i].length))

}

console.log(newArr.join(' '))
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
