console.log("+++++Map collection++++");
let map = new Map();
//set key-value pair
map.set('2',"apple")
.set(2,"banana")
.set(true,'watermelon')
.set({john:"Newman"}, "I like fruit")
.set({peter:"Parker"},{profession:"Spider man"})
//get value by the key
console.log(map);
console.log(map.get(2));
console.log(map.get(true));
console.log(map.get("2"));

console.log(map.has('2'));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50],
  [1,"glass"],
  [{person:'Vasilii'},{familyName:"Pupkin"}]
]);

//iterates through the map keys
for (let ingredients of recipeMap.keys()) {
  console.log(ingredients);
}
for (let values of recipeMap.values()) {
  console.log(values);
}
for (let entry of recipeMap) {
  console.log(entry);
}


let obj = {
  name: "John",
  age: 30
};

let map1 = new Map(Object.entries(obj));

console.log(map1.entries());
let objFromMap = Object.fromEntries(map);
//object Object because we try to set a key as object
console.log(objFromMap);

