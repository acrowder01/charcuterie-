 import React from 'react';
 import "../pages/Charcuterie_Boards/Styles.css"
 
 export default function Product (props)  {
     const {product, onAdd} = props;

 
     console.log("this is inside products.js")

     return (
         <div>
             
            <img className='small'  src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={onAdd}>Add to Cart</button>
            </div>
         </div>
     )
 }
 
 
 