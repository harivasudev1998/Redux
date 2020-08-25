

const addProductBroadcast = function(product){
    console.log("Received new product in action broadcaster....");
    console.log(product);
    console.log("Broadcast the custom event with payload....");
    console.log("Reducer will capture the custom-event + payload....")
    return ({
        type:'NEW_PRODUCT',
        payload:product
    })

}

export default addProductBroadcast