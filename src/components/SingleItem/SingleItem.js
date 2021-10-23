import React from 'react';
import s from './SingleItem.module.css'
import {Redirect} from 'react-router-dom'

const SingleItem = ({currentProduct, addToCart}) => {
    return (
        <div>
            {currentProduct
                ? <div className={s.singleItem}>
                    <h1>{currentProduct.title}</h1>
                    <div className={s.itemDetails}>
                    <div>
                        <img className={s.image}
                             src={currentProduct.image}
                             alt=""/>
                    </div>
                    <div>
                        <button className={s.addToCart} onClick={() => addToCart(currentProduct.id)}>
                            Add Product To Cart
                        </button>
                        <div className={s.description}>{currentProduct.description}</div>
                    </div>

                </div>
            </div>
                : <Redirect to="/store" />
            }
        </div>
    );
};



export default SingleItem;