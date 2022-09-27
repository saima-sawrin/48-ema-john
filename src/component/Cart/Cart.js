import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let total =0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping  = shipping + product.shipping;
    }
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
              <p>Selected Item: {cart.length}</p>
              <p>Total Price:{total}</p>
              <p>Total Shipping:{shipping}</p>
              <p>Tax:{}</p>
              <h2>Grand Total:{}</h2>
              <button>Clear Cart</button>
              <br />
              <button>Review Order</button>
              
        </div>
    );
};

export default Cart;