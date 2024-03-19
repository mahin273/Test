//promisfy this async function
//return undefined
// function myOwnSetTimeout(callback, duration) {
//     setTimeout(callback, duration);
// }
// myOwnSetTimeout(function () {
//     console.log("After setTimeOut")
// },1000)

//returning a promise
// function promisifiedMyOwnSetTimeout(duration) {
//     const p = new Promise(function (resolve) {
//         setTimeout(resolve, duration);
//     });
//     return p;
// }
 
// const ans = promisifiedMyOwnSetTimeout(1000);
// ans.then(function () {
//     console.log("Timeout is do  ne");
// });



