 let readNumber =function () {
   let num;
   while (isNaN(num) || num === null || num === '') {
     num = prompt('enter');
   }

};
readNumber();