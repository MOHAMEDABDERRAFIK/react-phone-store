import React, { Component } from 'react'
import Product from './Product.js';
import Title from './Title.js';
import {storeProducts} from '../data';
import { ProductConsumer } from '../context.js';

export default class ProductList extends Component {
  state={
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'></div>
          <Title name='our' title='products' />
          <div className='row'>
            <ProductConsumer>
              {value =>{
                  return value.products.map(product => {
                    return <Product key={product.id} product={product}/>;
                  });
              }}
            </ProductConsumer>
          </div>
          
        </div>
      </React.Fragment>
      
    )
  }
}
