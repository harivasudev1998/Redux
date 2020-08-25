import React from 'react';
import { connect } from 'react-redux'
import { Link, Switch, Route,withRouter } from 'react-router-dom';
import productlist from './productlist';
import editproduct from './editproduct';
import addproduct from './addproduct';
import Navbarname from './navbar';

class Home extends React.Component {
    constructor() {
        super();
        console.log('hi tere');
    }
    
    render() {    
        return (  
            <div>
                    <Navbarname/>
                    <Switch>
                        <Route path='/allproducts' component={productlist}></Route>
                        <Route path='/editproduct/:id' component={editproduct}></Route>
                        <Route path='/addproduct' component={addproduct}></Route>
                        <Route path='/' component={productlist}></Route>
                    </Switch>
            </div>
        );
    }
}
const storeToProps = (store) => {
    console.log(store);
    return {
        products:store.allproducts,
        productname:store.productname
        
    }
}
export default connect(storeToProps)(Home);