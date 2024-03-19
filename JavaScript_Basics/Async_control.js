const takeOrder=(customer,callback)=>{
    console.log(`Order taken from ${customer}`);
    callback(customer);
};

const processOrder = (customer,callback)=>{
    console.log(`Processing order for ${customer}`);

    setTimeout(()=>{
        console.log('Cooking completed');
        console.log(`Order processed for ${customer}`);
        callback(customer);
    },5000);
};

const completeOrder=(customer)=>{
    console.log(`Order completed for ${customer}`);
}

takeOrder("customer 1",(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer);
    });
});

//console.log("Run me Man:)");