import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={'navigation'}>
            <Link to={'/store'} className={'nav-store'}>Big Store</Link>
            <Link to={'/cart'}  className={'nav-cart'}>Cart</Link>
        </div>
    );
};

export default Navigation;