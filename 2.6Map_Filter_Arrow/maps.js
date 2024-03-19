//give an array,give me back a new array in
//which every value is multiplied by 2

const { readSync } = require("fs");

// const input=[1,2,3,4,5,6,7,8,9];

// const newArray = [];
// for(let i =0;i<input.length;i++){
//     newArray.push(input[i]*2);
// }

// console.log(newArray);

//Let's do the same thing using map=>



const input = [1, 2, 3, 4, 5, 6];

// function transform(i){
//     return i*2;
// }

const ans = input.map(
  function transform(i) {
    return i * 2;
  });
console.log(ans);
