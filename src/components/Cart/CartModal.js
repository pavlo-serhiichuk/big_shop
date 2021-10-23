import React from 'react';
import s from "./Cart.module.css";
import CartItem from "./CartItem";

const CartModal = ({cart, removeFromCart, toggleModal}) => {
    return (
        <div id={'modalWrapper'} className={s.modalWrapper} >
            <div className={s.modal}>
                        <span className={cart.length > 0 && s.modalItem }>{cart.length > 0
                            ? cart.map(cartProduct => <CartItem key={cartProduct.id}
                                                                removeFromCart={removeFromCart}
                                                                cartProduct={cartProduct}/>)
                            : <div className={s.modalMessage} onBlur={toggleModal}>
                                <h1>You still haven't chosen your product</h1>
                            </div>
                        }</span>
                <div className={s.buyButtons}>
                    <button className={s.confirmCart} onClick={toggleModal}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;