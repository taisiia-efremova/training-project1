//Vasia selling tickets
function tickets(peopleInLine) {

  let peopleMoney = [...peopleInLine];
  let counter25My = 0;
  let counter50My = 0;
  let counter100My = 0;
  let counter50 = 0;
  let counter100  = 0;


  for (let i = 0; i < peopleMoney.length; i++) {
     switch(peopleMoney[i]) {
       case 25:
         counter25My++;
         break;
       case 50:
         counter50++;
         break;
       case 100:
         counter100++;
         break;
     }
  }


  while(counter50 > 0) {
    counter25My--;
    counter50My++;
    counter50--;
  }
  while(counter100 > 0 ) {
   if(counter50My > 0 && counter25My > 0) {
     counter50My--;
     counter25My--;
     counter100My++;
     counter100--;
   } else if(counter50My == 0 && counter25My > 3) {
     counter25My = counter25My - 3;
     counter100--;

   } else {
     return "NO";
   }
  }

  // return (counter50 == 0 && counter100 == 0) ? 'YES' : "NO"
  // console.log(counter25My + '  amount of 25')
  console.log(counter50  + ' amount of 50');
  console.log(counter100 + ' amount of 100');

  console.log(counter50My  + ' amount of MYYYYY 50');
  console.log(counter100My + ' amount of MYYYYY 100');



}

// console.log(tickets([25,50,25,25,25,25,50,25,100]));
console.log(tickets([ 25, 100 ]));
// console.log(tickets( [ 25, 25, 50, 100, 25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100 ]));
// console.log(tickets([25,50,25,25,25,25,50,25,100]));
// console.log(tickets([25,50,25,25,25,25,50,25,100]));
// console.log(tickets([25,50,25,25,25,25,50,25,100]));
// console.log(tickets([25,50,25,25,25,25,50,25,100]));