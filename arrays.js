let arr1 = [5, 3, 8, 1, 45, 52, 32, 12, 1, 56, 32, 2, 4, 123,];
let arr = [5, 3, 8, 1];
let arr2 = [ 1, 2, 15, -34,278 ];

console.log("++++++++++++++++++first Task++++++++++++++++++");
string1 = "background-color";
let result = [];
const camelize = function (str) {
  str = str.split('-')

  for (let i = 0; i < str.length; i++) {
    let value = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    result.unshift(value);
  }
  const str1 = result.join("");
  return str1;
}
console.log(camelize(string1));
console.log("++++++++++Second Task++++++++++++++");

function filterRange(arr, a, b) {
  let newArr = arr.filter(val => val > a && val < b);
  return newArr;
}

console.log(filterRange(arr, 2, 9));
console.log(filterRange(arr1, 2, 80));
console.log("++++++++++++++++++Third Task++++++++++");

function compareNumbers(a, b) {
  return a - b;
}

function filterRangeInPlace(arr, a, b) {

  arr.forEach((el, index) => {
    if (a <= el && el <= b) return;
    arr.splice(index, 1)
  })
}

filterRangeInPlace(arr, 1, 4);

console.log(arr);

console.log("++++++++++++++++++Fourth Task++++++++++");
 arr2.sort( (a, b) => a - b);
 console.log(arr2);

console.log("++++++++++++++++++Fifth Task++++++++++");
let arrNames = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
 let newArr = arr.slice().sort();
 return newArr;
}
console.log(copySorted(arrNames));
console.log(arrNames);

console.log("++++++++++++++++++Sixth Task++++++++++");

function Calculator(){
  this.methods = {
    "+":(a,b) => a + b,
    "-":(a,b) => a - b
  };
  this.calculate = function(str){
    let arr = str.split(' ');
    let sep = arr[1];
    let a = Number(arr[0]);
    let b = Number(arr[2]);
    return this.methods[sep](a,b);
  }


    this.addMethod = function (separator, funct) {
      this.methods[separator] = funct;
    }

};
let calc  = new Calculator;
console.log(calc.calculate('232 + 4323'));
calc.addMethod('*', (a,b) => a * b);
console.log(calc.calculate("12 * 3"));
console.log(calc.calculate("7 * 3"))
let calc2  = new Calculator;
console.log(calc2.calculate('2 - 3'));
