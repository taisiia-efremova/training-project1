
console.log('%c ES6 🎅🏼        ', 'background:  #F13C20; color:white; font-size: 30px');
const box6 ={
  color: "green",
position:1,
  //if we put here arrow function. the result  of the variables will be undefined.
  //Because it points to the outside lexicon . To the global object
  clickMe: function () {
    document.querySelector(".green").addEventListener("click",
      //If we put here NOT arrow function the result of the variables will be undefined.
      //Because the normal function declaration point to the global object automatically.
      //Because FD doesn't have this.

      () => {

      let str = `this string ${this.position} and it is ${this.color}`;
      console.log(str);

      })
  }
};
box6.clickMe();




function Person(name) {
  this.name = name;
}

// Person.prototype.myFriends5 = function(friends) {
//   let arr = friends.map(function(el) {
//     return this.name + " is friends with " + el;
//   }.bind(this));
//   console.log(arr);
// };


Person.prototype.myFriends5 = (friends) => {

  let arr = friends.map(function(el) {
    return this.name + "is friends with " + el;
  })

};
let friends = ["Bob" , "Jane", "Mike", "Paul"];

new Person("John").myFriends5(friends);

