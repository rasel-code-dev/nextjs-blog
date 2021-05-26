
import axiosInstance from "../api/axiosInstance"
import React from "react";
import {getFullLink} from "../utils/getFullLink";
import axios from "axios";


function HomePage (props){
  
  React.useEffect(()=>{
    axiosInstance.get("/api/products").then(response=>{
      console.log("client sit.replace.........d", response);
    })
  })
  
  return (
    <div>
      <h1>Product Page Home Page</h1>
      {
        props.products && props.products.length > 0 && props.products.map((product, i)=>(
          <div key={i}>
            <h3 >{product.name}</h3>
            <p>{product.price}</p>
            <span >{product.qty}</span>
            <div>
              <img
       
               width={344}
               alt={getFullLink(product.image)}
                src={getFullLink(product.image)}
              />
              
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

HomePage.getInitialProps=()=>{
  return axiosInstance.get("/api/products").then(response=>{
    console.log("db req finished"); 
    console.log(response);
    return {
      products: response.data.products
    }
  }).carch(ecc=>{
    return {
      products: []
    }
  })
}

export default HomePage