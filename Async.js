const GetCustomer = (id)=>{
    return new Promise((resolve,reject)=>{
        console.log("Getting data of Customer");
        const data = {
            id:id,
            firstname:"mahmoud",
            lastname:"ramadan",
            email:"mahmoudramadan0040@gmail.com"
        }
        setTimeout(()=>{
            resolve(data);
        },2000);
    });
}

const GetCutomerOrder = (email)=>{
    console.log("Get Order that related for user");
    return new Promise(()=>{
        setTimeout(()=>{
            resolve({email:email,order: "mobile", customerId: 1, creationDate: "2022-02-02"})
        },3000);
    });
}

async function get() {
    const customer = await getCustomer(1);
    const order = await GetCutomerOrder(customer.email)
    console.log(customer);
    console.log(order);
}