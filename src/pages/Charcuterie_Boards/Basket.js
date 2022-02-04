 import React from 'react';
 import "./Styles.css"
 import index from '../Charcuterie_Boards/index'
//  import index from './index'

 const Basket = (props) => {
    const { cartItems, onAdd } = props;
    
    
console.log({props})
console.log(cartItems.length)

     return (
        

         <aside className="block col-1"> 
         <h2>(basket)Cart Items</h2>
         
         <div> 
             {
              cartItems.length === 0
              && <div>Cart is empty</div> 
            //   : <div>Cart is full</div> 

            }
             
             
              </div>
             
             
         </aside>
         

          
     );
 }
 
 export default Basket;
 