const express=require("express");
const fs = require('fs');
const path = require('path');

const app = express();

app.get("/files",function(req,res){
fs.readdir(path.join(__dirname,'./files/'),function(err,files){
    if(err){
        return res.status(500).json({
            error:"Failed to retrive files"
        });
    }
    res.json(files);
});
});

app.get("/files/:file",function(req,res){
    const filePath=path.join(__dirname,'./files/',req.params.file);
    fs.readFile(filePath,'utf-8',function(err,data){
        if(err){
            return res.status(404).send("file not found");
        }
        res.send(data)
    })

})

app.all("*",function(req,res){
    res.status(404).send("Not found");
});

module.exports = app;

app.listen(3000);