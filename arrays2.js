console.log('++++++++++Seventh task++++');
let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let users = [vasya, petya, masha];
let names = users.map((item) => {
  return item.name;
});
console.log(names);
console.log('+++++++Eighth  task++++');

let vasya1 = {name: "Вася", surname: "Пупкин", id: 1};
let petya1 = {name: "Петя", surname: "Иванов", id: 2};
let masha1 = {name: "Маша", surname: "Петрова", id: 3};

let users1 = [vasya1, petya1, masha1];
// extra () . otherwise will be mistake !!!!!!!!!
let usersMapped = users1.map(function (item) {
  return {
    fullName: `${item.name}  ${item.surname}`,
    id: item.id
  }
});

console.log(usersMapped);

console.log('+++++++Ninth  task++++');

let vasya2 = {name: "Вася", age: 25};
let petya2 = {name: "Петя", age: 30};
let masha2 = {name: "Маша", age: 28};
let peter = {name: "Peter", age: 17};
let anna = {name: "Anna", age: 84};
let arr = [anna, peter, petya2, masha2, vasya2];

function sortByAge(arr) {
//Need to write comparison rule to make in work!!!!!!
  return arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

console.log(sortByAge(arr));

console.log('+++++++Tenth  task++++');
let arrNum = [1, 2, 3];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);


}

console.log(shuffle(arrNum));

console.log('+++++++Eleventh  task++++');



function getAverageAge(users) {
  return users.reduce(function (acc, cur) {  return acc += cur.age;}, 0) / users.length;
}

console.log(getAverageAge(arr));

console.log('+++++++Twelfth  task++++');
let resultArr = [];
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
function unique(arr) {
  return arr.forEach(item =>
  {if(!resultArr.includes(item)) {
    resultArr.push(item);}

return resultArr;
  })
}

unique(strings);
console.log(resultArr)