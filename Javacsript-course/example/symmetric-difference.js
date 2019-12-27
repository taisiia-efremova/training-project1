


function sym(...args) {


 let firstResultArr = [];
 console.log(args);
 for(let i = 0; i < args.length; i++) {
  let a = [];
 args[i].forEach(i => a.includes(i) ? i : a.push(i))
console.log(a);
  firstResultArr.push(a);
 }
console.log(firstResultArr);



let finalResult = [];
let secondResultArr = firstResultArr.join().split(",").map(item => Math.round(item)).sort((a, b) => a - b );
 const sortBox = {};

 secondResultArr.forEach( c => {
   c in sortBox ? sortBox[c] = "1" : sortBox[c] = "0"
 });


 for(let key in sortBox ) {
  if(sortBox[key] == "0") {
   finalResult.push(Math.round(key));
  }

 }
 // console.log(newArr);
console.log(finalResult)
}

// sym([1, 2, 3], [5, 2, 1, 4]);
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
