let array = [1,2,3,4,5,9,10,11,12,16,17,18,19,20];
function binarySearch(list,num) {
let low = 0;
let high = list.length - 1;
while(low < high) {
    let middle = Math.round(low + high / 2);
    console.log(middle)
    
    let guess = list[middle];
    if(num == guess ) {
        console.log(middle)
        console.log(guess)
        return guess
    }
     else if(num < guess) {
         high = middle -1;
         console.log("new Hight  " + high)
     } else {
         low = middle + 1;
         console.log("new low  " + low)
     }
    console.log("we don't have it ")
}
console.log('Finnaly dont have')


}
// binarySearch(array,11);
binarySearch(array,17);