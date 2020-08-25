import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import addProductBroadcast from '../action/addproductbroadcast'
import { Card, Container } from 'react-bootstrap';
import { createHashHistory } from 'history';
import axios from 'axios';

class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            price:0,
            rating:0,
            stock:0,
            image:'',
            description:'',
            category: ''
           
        }

    }

    captureName = (event)=>{
        console.log(event.target.value);
        this.setState({name: event.target.value})
    }

    capturePrice = (event)=>{
        console.log(event.target.value);
        this.setState({price: event.target.value})
    }

    captureStock = (event)=>{
        console.log(event.target.value);
        this.setState({stock: event.target.value})
    }

    captureRating = (event)=>{
        console.log(event.target.value);
        this.setState({rating: event.target.value})
    }

    captureDescription = (event)=>{
        console.log(event.target.value);
        this.setState({description: event.target.value})
    }
  
  
    captureImage = (event)=>{
        console.log(event.target.value);
        this.setState({image: event.target.value.substr(12)})
    }

    captureCategory = (event)=>{
        console.log(event.target.value);
        this.setState({category: event.target.value})
    }

    captureProduct=()=>{
        let product = {
            name: this.state.name,
            price: this.state.price,
            rating:this.state.rating,
            stock:this.state.stock,
            description:this.state.description,
            image:this.state.image,
            category: this.state.category,
          
        }

        axios.post("http://localhost:3000/allproducts", product)
        .then(response => {
            console.log(response)
            console.log("New Product Added !")
            this.props.sendNewProduct(response.data)
        }, error => {
            console.log(error)
        })
        history.push('/');
}

    render() { 
        const cardStyle={
            borderStyle:"solid",
            borderColor:"black",
            // padding:"20px",
            alignItems:"center",
            // margin:"20px",
            width:"100%",
            display:"inline-block",
             backgroundColor:"goldenrod",
             borderWidth:"5px",
             justifyContent:"center",
             textAlign:"center",
             paddingBottom:"150px"
        }
        return ( 
            <Container style={{justifyContent:"center",textAlign:"center",overflow:"auto"}}>
            <Card style={cardStyle}>
              
            <div>
               <b> <h3>Add Product</h3>
                Name: <input type="text" onChange={this.captureName}></input> 
                <br></br>
                <br></br>
                Price: <input type="number" onChange={this.capturePrice}></input> 
                <br></br>
                <br></br>
                Stock: <input type="number" onChange={this.captureStock}></input> 
                <br></br>
                <br></br>
                Description: <input type="text" onChange={this.captureDescription}></input> 
                <br></br>
                <br></br>
                Image: <input type="file" onChange={this.captureImage} multiple accept='image/*' />
                <br></br>
                <br></br>
                Rating: <input type="number" onChange={this.captureRating}></input> 
                <br></br>
                <br></br>
                Category:<select  id="category" name="category" onChange={this.captureCategory} >
                                        <option value=""></option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="Groceries">Groceries</option>
                                    </select> </b>
             <br></br>
             <br></br>                  
                {/* <input type="boolean" onChange={this.captureInstock}></input> {this.state.instock}
                <br></br> */}

<br></br>
               <button onClick={this.captureProduct}>Add</button>
            </div>
           
            </Card>
            </Container>
         );
    }
}


function convertPropToEventAndBroadcast(dispatch){
    return bindActionCreators({
        sendNewProduct: addProductBroadcast 
    }, dispatch)
}
 
export default connect(null, convertPropToEventAndBroadcast)(AddProduct);
export const history = createHashHistory();