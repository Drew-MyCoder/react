import React from "react"

export default function MyHeader() {
    return (
        <header>
                <nav className="nav">
                    <img src="./react-logo.png" className="img-logo"/>
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>About</li>
                        <li>Pricing</li>
                    </ul>
                </nav>
            </header>
    )
}
