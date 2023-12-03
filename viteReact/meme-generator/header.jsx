import React from "react";
import trollfaceLogo from './img/troll-face.png'
import './meme.css'

function Header(){
    return (
        <header className="header">
            <img src={trollfaceLogo} className="header--image/"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

export default Header