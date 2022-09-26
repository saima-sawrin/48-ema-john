import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import './Product.css';
const Product = (props) => {
    
    const {name , img , id , price , seller ,ratings } = props.product;
   const {handleAddToCart} = props;
    return (
        <div className='Products'>
            <img src={img} alt="" onError={(e)=>{e.currentTarget.src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"}} />
            <div className='product-info'>
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p><small>Manufactures:{seller}</small></p>
            <p><small>Rating:{ratings}</small></p>
       </div>
       <button className='btn-crt' onClick={()=>handleAddToCart(props.product)}>
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Product;