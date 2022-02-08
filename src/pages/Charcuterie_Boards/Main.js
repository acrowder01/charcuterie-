import React from 'react';
import Product from '../../components/Product';
import "./Styles.css"
import data from '../../components/data';

export default function Main(props) {
    const { products, onAdd } = props;

    return (
      <main className="flex col-2">
        <h2>Products(main)</h2>
        <div className="  row">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </main>
    );
  }