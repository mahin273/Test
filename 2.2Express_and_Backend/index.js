const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys:[{
        healthy: false
    }]
    
}];

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys = users[0].kidneys;
    const numbersOfKidenys = johnKidneys.length;
    let healthyKidneys = 0;
    for(let i =0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            healthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numbersOfKidenys - healthyKidneys;
    res.json({
        numbersOfKidenys,
        healthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/",function(req,res){
const isHealthy = req.body.isHealthy;
users[0].kidneys.push({
    healthy: isHealthy
})
res.json({
    message: "Kidney added"
})
})
app.put("/",function(req,res){
    for(let i =0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        message: "All kidneys are healthy"
    })

})

app.delete("/",function(req,res){
    if(isThereAtLeastOneUnhealthy()){
        const newKidneys = [];
        for(let i =0;i<users[0].kidneys.length;i++){
           if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
           }
        }
        users[0].kidneys = newKidneys;
        res.json({
            message: "Unhealthy kidneys removed"
        })
    }else{
        res.status(411).json({
            msg: "There is no unhealthy kidneys"
        })
    }


})

function isThereAtLeastOneUnhealthy(){
    let atLeastOneUnhealthy = false;
    for(let i =0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthy = true;
        }
    }
    return atLeastOneUnhealthy;
}
app.listen(3001);