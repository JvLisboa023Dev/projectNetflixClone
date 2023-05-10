import React from "react";
import './Header.css'

const HeaderJS = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="/images/netflixLogo.png" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="/images/netflixUsuario1.png" alt="Usuário"></img>
                </a>
            </div>
        </header>
    )
}

export default HeaderJS;