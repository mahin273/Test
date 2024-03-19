//callback--->
// function sum(num1,num2,fnToCall){
//     let result = num1+num2;
//     fnToCall(result);
// }

// function displayResult(data){
//     console.log("Result of the sum is: "+data);
// }

// function displayResultPassive(data){
//     console.log("Result of the sum is: "+data);
// }


// const ans = sum(10,20,displayResult);

//SetTimeout--> 
function greet(){
    console.log("Hello"); 
}

setTimeout(greet,5000);
setInterval(greet,1000);
