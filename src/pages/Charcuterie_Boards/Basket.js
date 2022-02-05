import React from 'react';
import "./Styles.css"
import index from '../Charcuterie_Boards/index'
//  import index from './index'

const Basket = (props) => {
    const { cartItems, onAdd, OnRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;



    console.log({ props })
    console.log(cartItems.length)

    return (

        <aside className="block col-1">
            <h2>(basket)Cart Items</h2>


            {
                cartItems.length === 0
                && <div>Cart is empty</div>
                //   : <div>Cart is full</div> 
            }

            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className='add'>+</button>
                        <button onClick={() => OnRemove(item)} className='remove'>-</button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty}  x  ${item.price}
                    </div>

                </div>
             ))}

{cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}

      
    </aside>
  );
}

export default Basket;