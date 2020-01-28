// class Animal1 {

//     constructor(name, speed) {
//       this.speed = speed;
//       this.name = name;
//     }
//   static someVal = "anything"
//     run(speed = 0) {
//       this.speed += speed;
//       console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
  
//     static compare(animalA, animalB) {
//       return animalA.speed - animalB.speed;
//     }
  
//   }
  
//   // Наследует от Animal
//   class Rabbit1 extends Animal1 {
//     hide() {
//       console.log(`${this.name} прячется!`);
//     }
//   }
  
//   let rabbits = [
//     new Rabbit1("Белый кролик", 10),
//     new Rabbit1("Чёрный кролик", 5)
//   ];
  
//   let dog = new Animal1('Bernard', 28)
//   rabbits.sort(Rabbit1.compare);
  
//   rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.

// // ! new exercise!!!!!!!!!!

//   class PowerArray extends Array {
//     isEmpty() {
//       return this.length === 0;
//     }
//   }
//   let arr = new PowerArray(1, 2, 5, 10, 50);
//   let filteredArr = arr.filter(item => item >= 10);
//   console.log(filteredArr);
 
//   class Animal {
//       type = 'predator'
//   }
// class Rabbit extends Animal {
//     static type = 'little cute one'
// }

// let rabbit = new Rabbit();
// // alert(rabbit instanceof Animal); // true

// // rabbit.__proto__ === Rabbit.prototype
// // rabbit.__proto__.__proto__ === Animal.prototype (совпадение!)
// Rabbit.prototype.sayHello =  function() {
//     console.log("hello")
// }
// rabbit.__proto__
// // let little = {};
// // rabbit.prototype.face = function() {
// //     console.log("6456345635635635623see a cute rabbit face");
// // }

// // alert(little.toString())

// const fruit = {
//     type: "fruit",
//     color:"orange"
// }

// const orange = Object.create(fruit);



var ParrotGrandfather = function() {};
ParrotGrandfather.prototype = {
  species: 'Parrot',
  paws: 2
};


let ParrotFather = function() {};
ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);

let ParrotSon = function() {};
ParrotSon.prototype = Object.create(ParrotFather.prototype);

var grandfather = new ParrotGrandfather();
var father = new ParrotFather()
var son = new ParrotSon();

console.log(grandfather.species, father.species, son.species);
// Parrot Parrot Parrot - все попугаи!
console.log(grandfather.paws, father.paws, son.paws);
// 2 2 2 - у каждого по 2 лапы

ParrotGrandfather.prototype.paws++;
console.log(grandfather.paws, father.paws, son.paws);

ParrotFather.prototype.paws++;
console.log(grandfather.paws, father.paws, son.paws);