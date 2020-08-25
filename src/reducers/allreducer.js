import {combineReducers} from 'redux'
import myallproductsreducer from './allproducts'
import mynavbarreducer from './navbarreducer'


const allreducer = combineReducers({

    allproducts:myallproductsreducer,
    productname:mynavbarreducer,
  
})

export default allreducer