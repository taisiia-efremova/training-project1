let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
  method: function () {
 console.log("hello")

  },
  value: undefined,
  fav : 'apple',
};

let json = JSON.stringify(student);
console.log( json);
let fruit = ['apple','banana','melon'];
let arrJson = JSON.stringify(fruit);
console.log(arrJson);

let string = "something";
let strJson = JSON.stringify(string);
console.log(strJson);


let user1 = {
  sayHi() { // будет пропущено
    alert("Hello");
  },
  [Symbol("id")]: 123, // также будет пропущено
  something: undefined // как и это - пропущено
};

console.log(JSON.stringify(user1));

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;      // meetup ссылается на room
// room ссылается на meetup

console.log(JSON.stringify(meetup)); // Ошибка: Преобразование цикличной структуры в JSON

console.log('++++++++++++++exercise++++++');
let user = {
  name: "Василий Иванович",
  age: 35
};

let userJson = JSON.stringify(user);
console.log(userJson);