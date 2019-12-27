
// const Person = function (name, familyName, job) {
//   this.name = name;
//     this.familyName =  familyName;
//     this.job = job;
//
// };
// Person.prototype.sayHi = function () {
//   console.log("Hello from " +  this.name + " " + this.familyName)
//
// };
// const peter = new Person("Peter" , "Parker", "spiderman");
// peter.sayHi();

//Object.create

let personProto = {
  calculateAge:function() {
    console.log(2019- this.yearOfBirth);
  }
};
let john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1993;
john.job = "teacher";

let peter = Object.create(personProto, {
  name: {value: 'Peter'},
  yearOfBirth: {value: 1987},
  job: {value: "policeman"}
});
let years = [1991,1843, 1965,1549,1967];
function arrayCalc(arr,fn) {
  let arrRes = [];
  for(let i = 0;i < arr.length; i++) {
    arrRes.push(fn(arr[i]));

  } return arrRes;
}
function calcAge(el) {
  return 2019 - el;
}
function maxRate(el) {
  if(el >= 20 && el <= 100) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return " too old"
  }
}
let ages = arrayCalc(years,calcAge);
console.log(ages);

let rate = arrayCalc(ages,maxRate);
console.log(rate);


function interviewQuestion (job) {
  if (job === "designer") {
    return function(name){
      console.log(name + "can you design for me ")
    } } else if ( job === "teacher") {
      return function (name ) {
        console.log("tech me Javascript " + name);
      }
    }
  else {
    return function(name) {
      console.log("tell me what do you do")
    }
  }
}
let teacher = interviewQuestion("teacher");
teacher('Peter');

interviewQuestion("diver")('lala');

// IIFE


(function (goodluck) {
  let score = Math.random() * 15;
  console.log(score >= 5 - goodluck)
}) (4);

//Closures

function retirement(age) {
  let a = "years left until retirement";
  return function(year) {
    let ageP = 2019 - year;
    console.log((age - ageP) + a);
  }
}

let retirementUS = retirement(66) (1991);
//with closures return only one function not each time different like before
function interviewQ (job) {


  return function (name) {
   if (job == "teacher") {
     console.log(name + "can you design for me ")
   } else if ( job === "designer") {
     console.log("tech me Javascript " + name)
   } else {
     console.log("tell me what do you do")
   }

  }
}
let tea = interviewQ("teacher")("Peter");


interviewQ("teacher")('lala');

//Bind. Call .apply

let tata = {
  name: "Tata",
  pet: "cat",
  job: "frontend",
  presentation : function (style, timeOfDay) {
    if (style == "formal") {
      console.log("Hello Madam " + timeOfDay + this.name + this.job)
    } else if (style == "friendly") {
      console.log("Hello dear " + timeOfDay  + this.name + this.job);
    }
  }
};
let dani = {
  name: "Dani",
  pet: "dog",
  job: "backend",
};

tata.presentation("formal", "morning");
tata.presentation.call(dani,"friendly", "evening");

let years1 = [2007,1991,1843, 1965,1549,1967];

function arrayCalcNew(arr,fn) {
  let arrRes = [];
  for(let i = 0;i < arr.length; i++) {
    arrRes.push(fn(arr[i]));

  } return arrRes;
}
function calcAgeNew(el) {
  return 2019 - el;
}
function isFullAge(limit, el) {
  return el >= limit;
}
function maxRateNew(el) {
  if(el >= 20 && el <= 100) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return " too old"
  }
}

let ages1 = arrayCalc(years, arrayCalcNew);
//we make a preset limit for the isFullAge function
let fullJapan =  arrayCalcNew(ages,isFullAge.bind(this,20));
console.log(fullJapan);
