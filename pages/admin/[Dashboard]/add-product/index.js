import React from 'react';
import styles from "./Add-Product.module.scss"


const AddProduct = () => {
  return (
    <div className={styles.add_product_page}>
      <h1>Add Product</h1>
      <form className={styles.add_product_form} >
        <div className={styles.input}>
          <label htmlFor="name">Product Name</label>
          <input type="text" id="name" placeholder="Enter Product name"/>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;