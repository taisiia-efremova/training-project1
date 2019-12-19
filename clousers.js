//make a private methods inside a function
let counter = (function(){
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter +=val;
  }
  return {
    increment: function () {
changeBy(1);
    },
    decrement: function () {
changeBy(-1);
    },
    value:function () {
return privateCounter;
    }
  }
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());

//1. Create a function
/*2. Give a value
* 3.return anonymous function using the outer function value
* 4.create a var with a function call
* 5. Call it*/
function makeFunct() {
  let value = "Great value";
  return function() {
    console.log(value);
  }
}

let printval = makeFunct();
printval();
//+++++++++++++++++++++++++++++++++++++++++++
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete"; // (*)
sayHi(); // Pete
name = "Vova"; // (*)
sayHi();


//second example+++++++++++
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log( counter1() ); // 0
console.log( counter1() ); // 1


console.log( counter2() );
console.log( counter2() );
//Sum function using closures;
//exercise No1;
function sum(a) {
 return function(b) {
  return a + b;
 }
}
console.log(sum(2)(4));

//Filter array with a function;
let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
function inBetween (a,b) {
 return  function f(x) {
    return x > a && x < b;
  }
}
console.log(arr.filter(inBetween(2,5)));

function inArray(arr1) {

  return function (x) {
     return arr1.includes(x);
  }
}
console.log(arr2.filter(inArray([1,2])));

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 11) {
    let shooter = function() { // функция shooter
      console.log( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...