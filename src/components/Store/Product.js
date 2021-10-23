import React from 'react';
import s from './Store.module.css';
import {Link} from "react-router-dom";

const Product = ({product, addToCart, loadCurrentItem}) => {
    return (
        <div className={s.product}>
            <div>
                <img className={s.productImage} src={product.image} alt={product.title}/>
            </div>
            <div className={s.itemInfo}>
                <h3>{product.title}</h3>
                <Link to={`/store/${product.id}`}
                      className={s.viewProduct}>
                    <button onClick={() => loadCurrentItem(product)}>
                        View Product
                    </button>
                </Link>
                <div>
                    {product.description}
                </div>
                <div>
                    {product.price}
                </div>
                <button onClick={() => addToCart(product.id)} className={s.addToCart}>
                    Add Product To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;