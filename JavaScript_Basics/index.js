console.log("at the top  1")

function promisifiedTimeout() {
    console.log("Function called 3");
    return new Promise(function (resolve) {
        console.log("Inside Promise callback 4");
        setTimeout(function () {
            console.log("Set Timeout called 5");
            resolve("Done babay!I am burnt out.");
        }, 5000);
    });
}

console.log("In the middle 2")
promisifiedTimeout().then(function (value) {
    console.log("Promisifed then 6")
    console.log(value);
});