console.log("++++++Set collection++++++");
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

//repeated values didn't add
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log("number of values in Set" + " " +set.size);
for (let user of set) {
  console.log(user.name); // John (потом Pete и Mary)
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(values);
let namesSet = new Set;
values.forEach(item => namesSet.add(item));
for (let values of namesSet) {
  console.log(values);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let map = new Map();

function aclean(arr) {
   let obj = arr.map(item =>
     map.set(`${item.toLowerCase().split("").sort().join("")}`, `${item}`)


   );
  console.log(obj)
}
aclean(arr);
console.log(map.values());
//==================================================================================
let mapNew = new Map();
mapNew.set("name", "John");
mapNew.set("age", "78");
mapNew.set("old", true);
mapNew.set("grandchildren", "3");
let keys = [];
console.log(mapNew.entries());
for (let key of mapNew.keys()) {
keys.push(key)
}
keys.push('newData');
console.log(keys);