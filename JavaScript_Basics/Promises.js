 const fs = require("fs")
 
 function MahinReadFile(){
    console.log("Inside MahinReadFile");
    return new Promise(function(resolve){
        console.log("Inside Promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);
        });
    });
 } 

 function onDone(data){
    console.log(data);
 }

    MahinReadFile().then(onDone);