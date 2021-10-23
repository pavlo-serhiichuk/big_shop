import React, {useEffect, useState} from 'react';
import s from "./Cart.module.css";
import CartItem from "./CartItem";
import {connect} from "react-redux";
import {removeFromCart} from "../../redux/shop-reducer";
import CartModal from "./CartModal";

const Cart = ({cart, removeFromCart}) => {

    let [totalAmount, setTotalAmount] = useState(0)
    let [totalPrice, setTotalPrice] = useState(0)
    let [modalWindow, setModalWindow] = useState(false)

    useEffect(() => {
        let price = 0
        let amount = 0

        cart.forEach(item => {
            amount += item.qty
            price += item.qty * item.price

            setTotalAmount(amount)
            setTotalPrice(price)
        })
    })
    const toggleModal = () => {
        setModalWindow(prev => !prev)
    }

    return (
        <>
            <div className={s.cart}>
                <div>
                    {cart.length > 0
                        ? cart.map(cartProduct => <CartItem key={cartProduct.id}
                                                            removeFromCart={removeFromCart}
                                                            cartProduct={cartProduct}/>)
                        : <div className={s.message}>
                            <h1>Choose some product, before you buy it)</h1>
                        </div>
                    }
                </div>
                <div className={s.cartResult}>
                    <div>
                        Common price:
                    </div>
                    <div>${cart.length > 0 ? totalPrice : 0}</div>
                    <div>Amount:</div>
                    <div>{cart.length > 0 ? totalAmount : 0}</div>
                </div>
            </div>
            <div className={s.perchaseContainer}>
                <button className={s.buy} onClick={toggleModal}>Buy</button>
                {modalWindow
                    ? <CartModal cart={cart}
                                 removeFromCart={removeFromCart}
                                 toggleModal={toggleModal} />
                : null}
            </div>
        </>
    );
};

const mstp = (state) => ({
    cart: state.shop.cart
})

const mdtp = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(mstp, mdtp)(Cart);