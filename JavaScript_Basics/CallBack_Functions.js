function square(n){
    return n*n;
}

function cube(n) {
    return n*n*n;
    
}

// function sumOfSqures(a,b){
//     const val1= square(a);
//     const val2= square(b);
//     return val1+val2;
// }

// function sumOfCubes(a,b){
//     const val1= cube(a);
//     const val2= cube(b);
//     return val1+val2;
// }

function sum(a,b,fn){
    const val1= fn(a);
    const val2= fn(b);
    return val1+val2;
}
console.log(sum(1,2,square));
console.log(sum(1,2,cube));