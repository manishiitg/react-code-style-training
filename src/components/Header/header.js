import React from "react"
import logo from './../../logo.svg';

import styles from "./header.module.scss"

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="100" height="auto" alt="" loading="lazy" />
                    <span className={styles["header-text"]}>Style Guide React</span>
                </a>
            </div>
        </nav>
    )
}

export default Header