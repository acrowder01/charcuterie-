import React from 'react';
import Product from '../../components/Product';
import "./Styles.css"

const Main = (props) => {

    const { products } = props;
    // console.log( {products})

    return (
      
        <main className="block col-2">

            <h2>(main)Products</h2>

            <div className='row'>
                {/* {products.map((product) => {
                    <Product key={product.id} product={product}></Product>
                })} */}

                


            </div>
        </main>


    );
}

export default Main;
