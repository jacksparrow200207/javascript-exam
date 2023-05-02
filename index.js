// 1 chi masala

let str = "+998 33 576 2020";
let num = "+998 91 665 5654";

// const detect = (arg) => {
//   let res = {
//     country: arg.slice(0, 5),
//     region: arg.slice(5, 7),
//     city: arg.slice(8, 11),
//     number: arg.slice(12, 18),
//   };
//   return res;
// };

// console.log(detect(num));

let obj = {
  c1: [3, 2, 4], //  [9+4+16]= (29) = 5.1
  c2: [1, 2, 2], // [1,4,4] = (9) = 3
  c3: [7, 4, 1], // [49,16,1] = (66) = 8.4
  c4: [2, 2, 2], // [4,4,4] = (12) = 3.3
};
//   res (5.1 + 3 + 8.4 + 3.3)/4

const mean = (sum) => {
  let res = Object.values(sum)

 for(i of res){
  all=0
  all+=i
  if(i===Array.isArray()){
    for(val of i){
    su=0
    val=val*val
    su+=val
    return su**(1/2)
    } return su**(1/2)
  }return all
 } return all/(res.length)
}






//   for (val of res) {
//     sum1 = 0;
//     for(i of val){
//       ad=0
//       i=i*i
//       ad+=i
//       sum2=ad**(1/2)
//       return sum2
//     }
//     sum1+=sum2
    
//   }
//    main=sum1/res.length
//   return main;
// };

// // }
// // mean(coordinate)
// console.log(mean(obj))



// savol sort
// {
  let title = "webbrain academy";
//   // task
//   // textni alphabet tarzda joylashtirish kerak.
//   // sort filter dan foydalanilmasin.
//   // bosh joylar chiqarib yuborilsin
//   // javob
//   //   title = "aaabbcdeeimnrwy";
// }

const getSort=()=>{
  for(i in title){
    if(title[i]>=title[i+1])console.log(title[i])
    else if(title[i]===" ")console.log(title[i+1])
    return title
  }
  return title
}
console.log(getSort());