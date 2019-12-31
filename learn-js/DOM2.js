var array = [2,3,5,7,11];


function find(array, element) {
  let f = array.find(el => el == element);
  console.log(f);
  if (f === undefined) {
    return "Not found";
  }else {
    return array.indexOf(element)
  }

}
console.log(find(array,1));
var findAverage = function (nums) {
  let sum = nums.reduce((acc,cur) => { return acc + cur});

  let result = sum/nums.length;
  return result;}
  console.log(findAverage([1, 3, 5, 7]))

