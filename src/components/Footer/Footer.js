import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Footer.module.css'
const Footer = () => {
    return (
        <div className={s.footer}>
           <NavLink className={s.aboutUs} to={'/aboutUs'}> About Us</NavLink>
        </div>
    );
};

export default Footer;