console.log('hell0 object');
let obj = {
  name:"Kate",
  age:28,
  profession: "teacher"
};
let val = Object.values(obj);
console.log(val);
console.log(Object.keys(obj));
console.log(Object.entries(obj));

for (let value of Object.values(obj)) {
  console.log(value); // John, затем 30
}

//calculate values from the object
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(salaries) {
return Object.values(salaries).reduce((acc,currVal) => {
   return acc + currVal;
},0)

}
console.log(sumSalaries(salaries));

//=========================================================
//count the number of values in object
let user = {
  name: 'John',
  age: 30
};
function count (obj) {
  return Object.values(obj).length;
}
console.log(count(user));