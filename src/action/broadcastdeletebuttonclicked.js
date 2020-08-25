
const broadcastDeleteButtonClicked = function(id){
    console.log("Received friendlikes in action broadcaster....");
    console.log("Broadcast the custom event with payload....");
    console.log("Reducer will capture the custom-event + payload....")
    return ({
        type:'DELETE_BUTTON_CLICKED',
        payload:id
    })

}

export default broadcastDeleteButtonClicked