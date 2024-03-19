const hasMeeting = false;

const meeting = new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails ={
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM"
        };
        resolve(meetingDetails);
    }else{
        reject(new Error("Meeting already scheduled"));
    }
});

const addToCalendar = (meetingDetails)=>{
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
    
};

// meeting
//     .then(addToCalendar)
//     .then((res)=>{
//         //resolved data
//         console.log(JSON.stringify(res));
//     })
//     .catch((err)=>{
//         //rejected data
//         console.log(err.message);
//     });

async function myMeeting(){
    try{
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    }catch{
        console.log(`Error in meeting`);
    }
   
}
myMeeting().catch(console.error);