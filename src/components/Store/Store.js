import React from 'react';
import s from './Store.module.css';
import Product from "./Product";
import {connect} from "react-redux";
import {addToCart, loadCurrentItem} from "../../redux/shop-reducer";

const Store = ({products, addToCart, loadCurrentItem}) => {
    return (
        <div className={s.store}>
            {products.map((product) => {
                return <Product key={product.id}
                                product={product}
                                addToCart={addToCart}
                                loadCurrentItem={loadCurrentItem}/>
            })}
        </div>
    );
}


const mstp = (state) => ({
    products: state.shop.products
})

const mdtp = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    }
}

export default connect(mstp, mdtp)(Store);