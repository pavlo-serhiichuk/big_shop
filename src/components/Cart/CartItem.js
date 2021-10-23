import React from 'react';
import s from "./Cart.module.css";

const CartItem = ({cartProduct, removeFromCart}) => {
    return (
        <div className={s.cartItems}>
            <div>
                <img className={s.productImage}
                     src={cartProduct.image}
                     alt=""/>
            </div>
            <div className={s.itemInfo}>
                <h3>{cartProduct.title}</h3>
                <div className={s.amount}>
                    Amount: <input className={s.amountNumber} type="number" value={cartProduct.qty}/>
                </div>
                <br/><br/>
                <div>
                    {cartProduct.description}
                </div>
                <div>
                    {cartProduct.price}
                </div>
                <button className={s.deleteItem} onClick={() => removeFromCart(cartProduct.id)}>
                    <img src="https://image.flaticon.com/icons/svg/709/709519.svg" alt=""/>
                </button>
            </div>
        </div>
    );
};

export default CartItem;