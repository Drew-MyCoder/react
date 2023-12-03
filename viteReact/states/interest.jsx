import React from "react";
import './states.css'

export function App3() {
    const [isImportant, setIsImportant] = React.useState("yes")
  
    function handleClick() {
      setIsImportant("no")
    }
    return (
      <div className='state'>
        <h1 className='state--title'>Is state important to know?</h1>
         <div className="state--value" onClick={handleClick}>
          <h1>{isImportant}</h1>
  
         </div>
      </div>
   
    )
  }


  export default function Tracker() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    
    const [isAdded, setIsAdded] = React.useState(0)

    function add() {
        setIsAdded(previsAdded => previsAdded + 1)
    }

    function minus() {
        setIsAdded(previsAdded => previsAdded - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <div className="counter--count">
                <h1>{isAdded}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}


function App() {
  return (
    <Tracker />
  )
}