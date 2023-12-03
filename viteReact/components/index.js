/**
 * function TemporaryName() {
    return (
    <div>
        <img src="./react-logo.png" width="40px"/>
        <h1>Drew Bar</h1>
        <ul>
            <li>Home</li>
            <li>Price</li>
            <li>About</li>
        </ul>
    </div>
    )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"))







import React from "react"
import ReactDOM from "react-dom"
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"
import ListItems from "./ListItems"





function NewProject () {
    return (
        <div>
             <MyHeader />,
            <h1>Reasons why I am so excited to learn React</h1>
            <ListItems />
           <MyFooter />
        </div>
    )
}
*/

import React from "react"
import ReactDOM  from "react-dom"
import App from "./App"


ReactDOM.render(<App />, document.getElementById("root"))