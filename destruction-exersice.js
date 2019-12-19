console.log('+++++++++++++++++++++++++exercise++++++++++++++++++');

let user = {
  name: "John",
  years: 30
};

let {name, years, isAdmin = false} = user;
console.log(name);
console.log(years);
console.log(isAdmin);

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Alla": 543,
  "Jane": 54,

};
let emptyArr = [];

function topSalary(salaries) {

   let max = 0;
   let maxName = null;
    for(const [name,salary] of Object.entries(salaries) ) {
      if(max < salary) {
        max = salary;
        maxName = name;
      }

    }
  return `${maxName} has the biggest salary`;

}

console.log(topSalary(salaries));
