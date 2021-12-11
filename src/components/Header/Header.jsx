import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src={"https://icon-library.com/images/pngtree-abstract-colorful-logo-3d-modern-icon-concept-png-image_313255.jpg"}/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login :  <NavLink to={'/login'}>Login</NavLink>}

            </div>


        </header>
    )

}

export default Header;