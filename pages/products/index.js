import React from 'react';
import postsCss from "styles/posts.module.css"

import axiosInstance from "api/axiosInstance"
import Head from 'next/head'
import {getFullLink} from "../../utils/getFullLink"


const ProductPage = (props) => {
  
  React.useEffect(()=>{
    axiosInstance.get("/api/products").then(response=>{
      console.log("client site db req finished", response);
    })
  }, [])
  
  return (
    <div>
      <Head>
        <title>Product Page</title>
      </Head>
      
      <h1>Product Page</h1>
      {
        props.products && props.products.length > 0 && props.products.map((product, i)=>(
          <div key={i}>
            <h3 className={postsCss.h1}>{product.name}</h3>
            <p className={postsCss.p}>{product.price}</p>
            <span className={postsCss.price}>{product.qty}</span>
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
  );
};



// preload Data from server
ProductPage.getInitialProps=(ctx)=>{
  return axiosInstance.get("/api/products").then(response=>{ 
    console.log("db req finished");
    return {
      products: response.data.products
    }
  })
  
}

export default ProductPage;