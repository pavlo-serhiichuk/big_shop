import React from 'react';
import {Link} from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = () => {

    return (
        <div className={s.navigation}>
            <Link to={'/store'} className={s.navStore}>Big Store</Link>
            <Link to={'/cart'}  className={s.navCart}>Cart</Link>
        </div>
    );
}

export default Navigation;