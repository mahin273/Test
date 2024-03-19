function MahinAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi There");
        },3000)
        
    });
    return p;
}

async function main(){
  let value = await MahinAsyncFunction();
  console.log("Hello Bhai");
    console.log(value);
    }


main();

console.log("After Main"); 