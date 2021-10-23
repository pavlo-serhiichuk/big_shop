import React from 'react';
import s from './SingleItem.module.css'
import {connect} from "react-redux";
import SingleItem from "./SingleItem";
import {addToCart} from "../../redux/shop-reducer";

const SingleItemContainer = ({currentProduct, addToCart}) => {
    return (
        <>
            <SingleItem currentProduct={currentProduct}
                        addToCart={addToCart}/>
        </>
    );
};

const mstp = (state) => {
    return {
        currentProduct: state.shop.currentItem
    }}

const mdtp = (dispatch) => ({
        addToCart: (id) => dispatch(addToCart(id))
   })


export default connect(mstp, mdtp)(SingleItemContainer);