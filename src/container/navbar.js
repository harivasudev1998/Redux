import React from 'react';
import { connect } from 'react-redux'
import { createHashHistory } from 'history';




class Navbarname extends React.Component {
    constructor() {
        super();
        console.log('he tere');
    }
    
  display = () => {
      return this.props.products.map((f)=>{
        return (<h2>{f.name}</h2>)
      })
  }

  addProd(){
    // window.location.href = '/addproduct'
   history.push('/addproduct');
}
  
    render() {  
     if(this.props.productname!=null){
        return ( 
             
            <div style={{backgroundColor:"yellow"}}>
                <h2 style={{textAlign:"center"}}>Product Inventory</h2>
                    <h2> Name of the Product added is {this.props.productname}</h2>
                    <button  onClick={this.addProd}
                style={{  padding: '10px', width: '15%',height: '5%',border: '1px solid black',background: 'green',color: 'aqua',textAlign:"center",marginLeft:"80%",marginBottom:"2%"}}>Add a new product</button>
                    
                    
            </div>
        );
     }
     else
     {
        return (
            <div  style={{backgroundColor:"yellow",paddingTop:"2%",paddingBottom:"10px"}}> 
             <h2 style={{textAlign:"center"}}>Product Inventory</h2>
        <button  onClick={this.addProd}
        style={{  padding: '10px', width: '15%',height: '5%',border: '1px solid black',background: 'green',color: 'aqua',textAlign:"center",marginLeft:"80%",marginBottom:"2%"}}>Add a new product</button>
      
                </div>
            );
     }
    }
}
const storeToProps = (store) => {
    console.log(store);
    return {
        products:store.allproducts,
        productname:store.productname
        
    }
}
export default connect(storeToProps)(Navbarname);
export const history = createHashHistory();