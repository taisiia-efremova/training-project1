//with out arguments we make an object with now time
let now = new Date();
console.log(now);
//date with arguments time arguments --- amount om milliseconds from the date 1 jan 1970
let Jul09_1991 =  new Date(24 * 3600 * 1000);
console.log(Jul09_1991.getTime());
//getTime()  convert the date into the timestamp
console.log(now.getTime());
//from string argument read the data
let date = new Date("1991-07-12");
console.log(date);

let randomTime = Date.parse('1230-08-13T12:14:59.456');
  console.log(randomTime);

let newDate = new Date(2004, 0, 1,12,23,33);
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getSeconds());
console.log(newDate.getUTCFullYear());

let start = Date.now();
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now();
console.log( `Цикл отработал за ${end - start} миллисекунд` );
console.log(start);

