import React from 'react';
import { connect } from 'react-redux'
import { Card, Row, Col, CardColumns, CardDeck, Container } from 'react-bootstrap'
import { createHashHistory } from 'history';
import deleteProductBroadcast from '../action/deleteProductBroadcast'
import { bindActionCreators } from 'redux';
import searchProductBroadcast from '../action/searchproductbroadcast';
import displayProductBroadcast from '../action/displayproductbroadcast'
import '../styles/styles.css';
import axios from 'axios';


class Productlist extends React.Component {

    UNSAFE_componentWillMount() {
        console.log("Mounting all products");
        this.allProducts()
    }

    allProducts() {
        axios.get("http://localhost:3000/allproducts")
            .then(response => {
                console.log(response)
                this.props.sendAllProduct(response.data)
            }, error => {
                console.log(error)
            })
    }

    displayPropsReceivedFromStore = () => {
        const cardStyle={
            borderStyle:"solid",
            borderColor:"black",
            margin:"20px",
            width:"30rem",
            height:"40rem",
             backgroundColor:"cyan",
             borderWidth:"5px",
             display:"inline-block",
             textAlign:"center",
            justifyContent:"center",
            // marginLeft:'25%',
            // flex:1,
            // flexWrap:"wrap",
            // flexDirection:"row"


        }
        return this.props.products.map(f => {
            return (
                <Col xl={4} md={6} xs={12}>

                    <Card style={cardStyle} key={f.id}>

                        <Card.Title>
                            <img src={"images/" + f.image}
                                alt="productImage" style={{ width: "100%" }}></img>
                            <b style={{ color: "red" }}>Product Name: {f.name}</b>
                        </Card.Title>
                        <Card.Body>
                            <br></br>
                            <b>Price: Rs.{f.price}</b>
                            <br></br>
                            <b>Rating: {f.rating}</b>
                            <br></br>
                            <b>Stock: {f.stock}</b>
                            <br></br>
                            <b>Category: {f.category}</b>
                            <br></br>
                            <b>Description: {f.description}</b>
                            <br></br>
    <br></br>
                            <button style={{ color: "yellow", backgroundColor: "red", padding: '10px', margin: "10px" }} onClick={() => this.deleteProduct(f)}>delete</button>
                            <button style={{ color: "yellow", backgroundColor: "green", padding: '10px', margin: "10px" }} onClick={() => this.editProduct(f.id)} type="submit">edit</button>
                        </Card.Body>

                    </Card>



                </Col>
            )

        })
    }

    deleteProduct = (p) => {
        console.log(p);
        axios.delete("http://localhost:3000/allproducts/" + p.id)
            .then(response => {
                console.log(response);
                console.log("product deleted")
                this.allProducts()
            }, error => { console.log(error) })
    }

    editProduct = (id) => {
        history.push('/editproduct/' + id);
    }


    render() {
        return (

            <Container style={{ backgroundColor: "wheat" }} fluid>


                <div>
                    <span>
                        <input type="text" name="search" className="searchBox" style={{ width: "90%", padding: "10px" }} placeholder="Serach for Products" onChange={(e) => this.props.searchProducts(e.target.value)} /></span>
                    <span><button style={{ padding: "10px", paddingLeft: "25px", paddingRight: "25px", backgroundColor: "purple", color: "wheat" }}>search</button></span>
                </div>
                <CardDeck>

                    <Row>




                        {this.displayPropsReceivedFromStore()}




                    </Row>

                </CardDeck>


            </Container>



        );
    }
}
const storeToProps = (store) => {
    console.log("storethis is ", store);
    return {
        products: store.allproducts
    }
}

const dispatchEvent = (dispatch) => {
    return bindActionCreators({
        deleteProduct: deleteProductBroadcast,
        sendAllProduct: displayProductBroadcast,
        searchProducts: searchProductBroadcast,
    }, dispatch)
}
export default connect(storeToProps, dispatchEvent)(Productlist);
export const history = createHashHistory();