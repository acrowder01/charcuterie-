import React from 'react';
import Basket from './Basket';
import Header from './Header';
import Main from './Main';
import data from '../../components/data';
import Product from '../../components/Product';
import { useState } from 'react/cjs/react.development';
// import { useState } from 'react';

const Charcuterie_Boards = () => {
    const {products} = data;
    console.log({products})

    const [cartItems, setCartItems] = useState('')
 

     
    return (
       
        // <div >
        <div className="App">
            <Header></Header>
            <div className="row">

          {/* passing  props {products} to main because main is responsible for rendering*/}
            <Main products ={products}  ></Main>
            <Basket></Basket>
                 </div>
            </div>
    );
}

export default Charcuterie_Boards;
