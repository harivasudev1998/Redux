const mynavbarreducer = function navbarReducer(state = null, action) {
    switch (action.type) {
        case "NEW_PRODUCT":
            return action.payload.name;
        default:
            return state;
    }
}


export default mynavbarreducer