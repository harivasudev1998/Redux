
const allproducts = [];



const myallproductsreducer = function allProductsReducer(state = allproducts, action) {
  let allproducts = state;
    switch (action.type) {
        
        case "ALL_PRODUCT":
            console.log("All products loaded !")
            console.log(action.payload)
            return action.payload
        case "NEW_PRODUCT":
            console.log('add name, price for new product....')                       
            console.log(state);
            console.log(action.payload);
            let length = state.length
            let newallproducts = [{ 
                                        id:length+1, 
                                        name: action.payload.name,
                                        price: action.payload.price,
                                        rating: action.payload.rating,
                                        stock:action.payload.stock,
                                        category:action.payload.stock,
                                        image:action.payload.image,
                                        description:action.payload.description,
                                  
                                    }, ...state]
            return newallproducts;

     
      case 'EDIT_PRODUCT':
                const product = {
                  id: action.payload.id,
                  name: action.payload.name,
                  price: action.payload.price,
                  description: action.payload.description,
                  stock: action.payload.stock,
                  rating: action.payload.rating,
                  category: action.payload.category,
                  image: action.payload.image
                }
         
         const index = allproducts.findIndex(product => product.id===action.payload.id);
         allproducts[index] = product;
         console.log("allProductsReducer -> allProducts", allproducts)
         return allproducts;
         
      case "DELETE_PRODUCT":
      console.log("DELETE_PRODUCT", action.payload);
      const updatedProducts = state.filter((product) => {
        return (product.id !== action.payload.id)
      })
      return updatedProducts;

      case 'SEARCH_PRODUCT':
      
        allproducts=allproducts.filter((prod)=>{
         return prod.name.toLowerCase().includes(action.payload.toLowerCase());
       })
       return allproducts;

    default: return state;
    }
}

export default myallproductsreducer