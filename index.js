"use strict"
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
//
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// const age = +prompt  ("write your age");
// console.log(age);
// if(age >=14 || age <=90 ) {
//  console.log('hey you')
// } else {
//   console.log('you are too old')
// }
// if (null || -1 && 1) alert( 'third' ); question



const firstQuestion = prompt("Who is there?")
if(firstQuestion == "Admin") {
  const passValid = prompt("Password")
  if(passValid== "I am boss") {
    console.log('Hello Boss')
  }  else if (passValid==null || passValid == ""){
    console.log("You pressed cancel")
  } else {
    console.log("Pass is wrong")
  }

} else if (firstQuestion == null || firstQuestion == ''){
  console.log('you pressed cancel')
} else {
  console.log("I don't know you stranger")
}