const searchProductBroadcast=function(value){
    console.log(value);
    return({
        type:"SEARCH_PRODUCT",
        payload:value
    })
}
export default searchProductBroadcast;