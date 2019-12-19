console.log('Welcome to destruction');
//Destruction of an array
// , , to skip not needed elements in destruction
let arr = ["Ilya","i",'dont','know','him',"Kantor"];
let [ name, , ,somethingElsey, dont] = arr;
console.log(name);
console.log(somethingElsey);
console.log(dont);


//split and destruction together
let [fruit, amount] = "apple 10pieces".split(' ');
 console.log(fruit);
 console.log(amount);

// destruction can be used not only with arrays, with any iterable values
let [a, b, c] = "abc";
console.log(b);

console.log('=+++++++++++++++Objects+++++++++++')

let userNew = {};
[userNew.name, userNew.age] = "Mark 38".split(' ');

console.log(userNew);

console.log('+++++++++++++++using entries+++++++++++++++')
let user = {
  name:"mike",
  age:80,
  hair:'green'
}
for(let[key,value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}
console.log("++++++++++++++++++Map. destruction++++++++++");

let user1 = new Map();
user1.set("name", "John");
user1.set("age", "33");

for (let [key, value] of user1) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

//Rest is a array of elements that rest.
console.log("++++++++++++++++Rest+++++++++++++++");
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//
// console.log(name1);
// console.log(name2);
// console.log(rest[1]);

console.log('++++++++++++++++destruction of the object++++++++++++');
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, height,width} = options;
console.log(title);
console.log(width);

let basket = {
  apple:1,
  grape:300,
  kiwi:5,
  orange:3
};
let {apple,...rest} = basket;

console.log(rest.kiwi);

//Difficult data structures destruction

let options1 = {
  size: {
    width1: 100,
    height1: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: { // положим size сюда
    width1,
    height1
  },
  items: [item1, item2], // добавим элементы к items
  title1 = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options1;
console.log(width1);
console.log(height1);
console.log(item1);

