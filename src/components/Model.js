import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Model extends Component {
  render() {
    return (
        <ProductConsumer>
            {(value) => {
                const {modelOpen, closeModel} = value;
                const {img, title, price} = value.modelProduct;
                
                if(!modelOpen)
                    return null;
                
                else{
                    return(
                    <ModelContainer>
                        <div className="container py-5">
                            <div className="row">
                            <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                <h5>item added to cart</h5>
                                <img src={img} className='img-fluid' alt='product'/>
                                <h5>{title}</h5>
                                <div className='text-muted'>price : {price} DH</div>
                                <Link to='/'>
                                    <ButtonContainer onClick={()=> {closeModel()}}>
                                        continue shopping
                                    </ButtonContainer>
                                </Link>
                                <br></br>
                                <Link to='/cart'>
                                    <ButtonContainer onClick={()=> {closeModel()}}>
                                        go to card
                                    </ButtonContainer>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </ModelContainer>
                    );
                }
            }}
        </ProductConsumer>
    );
  }
}

const ModelContainer = styled.div`
position : fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#model{
    background: var(--mainWhite);
}
`
