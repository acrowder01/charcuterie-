import React from 'react';
import Basket from './Basket';
import Header from './Header';
import Main from './Main';
import data from '../../components/data';
import Product from '../../components/Product';
import { useState } from 'react/cjs/react.development';
// import { useState } from 'react';

const Charcuterie_Boards = () => {
    const { products } = data;
    console.log({ products })


    //set default state for cart items to an empty array
    const [cartItems, setCartItems] = useState([]);

    //function to add items to the cart
    const onAdd = (product) => {
        // checked cart items and find the id of the product that is is equal to 
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
                );
        } else {
            // product does not exist we will add it with quantity of 1
            setCartItems ([...cartItems, { ...product, qty: 1}]);
        }

    };
//Remove items from cart
    const OnRemove = (product) =>{
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
             

            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
                );
               
                    
                

        }
    };

    return (

        // <div >
        <div className="App">
            <Header></Header>
            <div className="row">

                {/* passing  props {products} to main because main is responsible for rendering*/}
                <Main onAdd={onAdd} products={products}  ></Main>
                {/* passing cart items (from the state) to the basket */}
                <Basket onAdd ={onAdd} cartItems={cartItems} OnRemove={OnRemove}>

                </Basket>
            </div>
        </div>
    );
}

export default Charcuterie_Boards;
