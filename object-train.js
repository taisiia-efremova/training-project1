// function Calculator() {
//
//    this.read= function() {
//     this.num1 = +prompt('Enter the first number');
//     this.num2 = +prompt('Enter the second number');
//   };
//    this.sum = function() {
//    return (this.num1 + this.num2);
//    };
//    this.mult = function () {
//      return (this.num1 * this.num2)
//    };
// }
// let result = new Calculator();
// result.read();
// console.log(result.sum());
// console.log(result.mult());
// console.log(result);

//==============================================================================

function Accumulator(startValue) {
  this.value = startValue;
  this.read = function() {
    return this.value += (+prompt("enter the number"));
  }
}

let result = new Accumulator(10);
console.log(result.read());
console.log(result.read());
console.log(result);
