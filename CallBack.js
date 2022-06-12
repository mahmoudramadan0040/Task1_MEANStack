const GetCustomer = (id,callBack)=>{
    
        console.log("Getting data of Customer");
        const data = {
            id:id,
            firstname:"mahmoud",
            lastname:"ramadan",
            email:"mahmoudramadan0040@gmail.com"
        }
        setTimeout(()=>{
            callBack(data);
        },2000);
    
}

const GetCutomerOrder = (email , callBack)=>{
    console.log("Get Order that related for user");
    
        setTimeout(()=>{
            callBack({email:email,order: "mobile", customerId: 1, creationDate: "2022-02-02"})
        },3000);

}
GetCustomer(1,(customer)=>{
    console.log("customer"+": "+customer);
    GetCutomerOrder(customer.email,(order)=>{
        console.log(order);
    });
});