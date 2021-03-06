import React from 'react';
import Product from '../../components/Product';
import "./Styles.css"
import data from '../../components/data';

export default function Main(props) {
    const { products, onAdd } = props;

    return (
      <main className="flex col-2" id="main">
        <h2> Available Products</h2>
        <div className="  row">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </main>
    );
  }