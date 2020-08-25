import React from 'react';
import { connect } from 'react-redux';
import editProductBroadcast from '../action/editproductbroadcast'
import { bindActionCreators } from 'redux';
import { createHashHistory } from 'history';
import axios from 'axios';

class EditProduct extends React.Component {
   
    constructor(props){
        super(props)
        let prod= this.props.product.filter(p=>{
            return p.id===parseInt(this.props.match.params.id) 
       })
        this.state={
            id:prod[0].id,
            name:prod[0].name,
            price:prod[0].price,
            rating:prod[0].rating,
            stock:prod[0].stock,
            description:prod[0].description,
            category:prod[0].category,
            image:prod[0].image,
            // validation: true,
        }

    }

   

    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({price: event.target.value})
        // this.validationfn()
    }

    getRating=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({rating: event.target.value})
        // this.validationfn()
    }

    getStock=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({stock: event.target.value})
        // this.validationfn()
    }

    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})
        // this.validationfn()

    }

    getDescription=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({description: event.target.value})
        // this.validationfn()

    }

    getCategory = (event) => {
        this.setState({ category: event.target.value })
        // this.validationfn()
    }

    getImage=(event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({image: event.target.value.substr(12)})
        // this.validationfn()
    }

    
    editProduct =  (e) => {
        let productRequestBody = {
            "id":this.state.id,
            "name": this.state.name,
            "price": this.state.price,
            "rating":this.state.rating,
            "stock":this.state.stock,
            "category":this.state.category,
            "description":this.state.description,
            "image":this.state.image
        }
        // this.props.editproduct(productRequestBody);
        
        axios.put("http://localhost:3000/allproducts/" + this.state.id, productRequestBody)
        .then(response => {
            console.log(response)
            console.log(response.data)
            this.props.editproduct(response.data)
            console.log("Product Edited !!!")
            // this.allProducts()
        }, error => {
            console.log(error)
        })
        history.push('/');
        
}

    render() { 
        const buttonclr={
            backgroundColor:"green",
            color:"white",
            padding:'15px',
            // margin:'10px',
            border:'none',
            opacity: 0.9,
           
            
        } 
        
        return ( 
            <div style={{backgroundColor:"wheat",padding:"100px",justifyContent:"center",textAlign:"center"}}>
                {/* <h1>Edit product with id:{this.props.location.state.myid}  </h1> */}
                <div className="contain">
                <h2 style={{color:"red"}}>Edit Product</h2>
                {this.state.validation && <h3 className="error">All the below details are required </h3>}
                <form className="container">
                    {/* <b><label>Id: </label></b>
                    <input type="text" value={this.state.id} readOnly></input> */}
                    <br></br>
                    <br></br>
                    <b><label>Name: </label></b>
                    <input type='text' id="productname" value={this.state.name}  onChange={this.getName}></input>
                   
                    <br></br>
                    <br></br>
                    <b><label>Price: </label></b>
                    <input type='number' id="productprice" value={this.state.price}  onChange={this.getPrice}></input>
                    
                    <br></br>
                    <br></br>
                    <b><label>Rating: </label></b>
                    <input type='number' id="productrating" value={this.state.rating}  onChange={this.getRating}></input>
                  
                    <br></br>
                    <br></br>
                    <b><label>Description: </label></b>
                    <input type='text' id="productdescription" value={this.state.description}  onChange={this.getDescription}></input>

                    <br></br>
                    <br></br>
                    <span><label htmlFor="category">Category</label>
                                    <select  id="category" name="category" value={this.state.category} onChange={this.getCategory}>
                                        <option value=""></option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="Groceries">Groceries</option>
                                    </select>
                    </span>
                    <br></br>
                    <br></br>
                    <b><label>Stock: </label></b>
                    <input type='number' id="productstock" value={this.state.stock}  onChange={this.getStock}></input>
                   
                    <br></br>
                    <br></br>
                    <b><label>Product Image: </label></b>
                    <input type="file" onChange={this.getImage} multiple accept='image/*' />
                    <br></br>
                    <br></br>
                    <button type="button"  onClick={this.editProduct} style={buttonclr} >Edit Product</button>
                    <br></br>
                    <br></br>
                  
                    {/* disabled={this.state.validation} */}
                </form>
            </div>
            </div>
         );
    }
}
const convertStoreToProps = (store) => {
    console.log('Received complete store....in product container');
    console.log(store);
    return {
        
        product: store.allproducts,

    }
}
const convertPropToEventAndBroadcast = (dispatch) => {
    return bindActionCreators({
        editproduct:editProductBroadcast
    }, dispatch)
}
 
export default connect(convertStoreToProps,convertPropToEventAndBroadcast)(EditProduct);
export const history = createHashHistory();