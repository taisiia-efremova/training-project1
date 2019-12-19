let schedule = {};
let user = {
  name:'John'
}
let isEmpty = function(obj) {
 Object.keys(obj).length ? console.log('not empty') : console.log('is empty');

}
isEmpty(schedule);
isEmpty(user);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let newSalaries = {

};
let calcSum = function(obj) {
  let result = Object.values(obj)
    .reduce(function(accum, el) {
      return accum = accum + el
    }, 0);
  console.log(result)
}
calcSum(salaries);
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
let multiplyNumeric = function(obj) {
  let result = Object.values(obj);
  console.log(result)
}
multiplyNumeric(menu)


let calculator = {
  num1:0,
  num2:0,
  sum:0,
  mult:0,
  read: function() {
    this.num1 = +prompt('write first number')
    this.num2 = +prompt('write second number')
  },
  sum: function() {
    this.sum =  this.num1 + this.num2;
  },
  multyply: function() {
    this.mult =  this.num1 * this.num2;
  }
}

calculator.read()
calculator.sum()
calculator.multyply()
console.log(calculator)
