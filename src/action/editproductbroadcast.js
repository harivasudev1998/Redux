const editProductBroadcast = function(product){

    console.log(product);
    return ({
        type:'EDIT_PRODUCT',
        payload:product
    })

}

export default editProductBroadcast