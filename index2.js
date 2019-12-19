// При помощи цикла for выведите чётные числа от 2 до 10.
// for (let i = 0; i< 11; i++){
//
//   if (i%2 ==1) continue;
//   console.log(i)
// }
//
//
// let i =0;
// while(i<3){
//   console.log( `number ${i}!` )
//   i++;
// }



// let num = +prompt("Write a number bigger then 100")
// while(num <= 100 && num) {
//   num = +prompt("Add number bigger then 100 , duddy ")
//
// }

// Вывести простые числа
// Для n = 10 результат должен быть 2,3,5,7.

let n = +prompt("enter the number")

numberLoop: for (let i=2; i <= n;i++){
  console.log(i)
  let array = [];
  for(let j=2;j<=n;j++){
    if (i%j == 0){
      console.log(`second loop say${j}`)

      array.push(j)

    }


  }if (array.length <= 1){
    console.log(`this is the number${i} you need***`)
  }
}