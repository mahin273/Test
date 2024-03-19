//Creating an http server
//Using Express
const express = require('express');
const app = express();
var users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res) {
    const johnkidney = users[0].kidneys;
    console.log(johnkidney);
    const numberofkidneys = johnkidney.length;
    let numberofHealthykidneys = 0;
    for(let i=0;i<johnkidney.length;i++){
        if(johnkidney[i].healthy){
            numberofHealthykidneys++;
        }
    }
    const unhealthyKidneys = numberofkidneys - numberofHealthykidneys;
    res.json({
        johnkidney,
        numberofHealthykidneys,
        unhealthyKidneys
    })
})

app.listen(3000);