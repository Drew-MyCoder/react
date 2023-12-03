import React from "react";

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}

/** the code below will all be sent to apps.jsx
 * import Joke from '../joke/joke'
  import jokesData from '../joke/jokesData'


function App() {
  const jokeElement = jokesData.map(joke => {
      // {second setup here is in reference to the setup in the jokesdata.jsx}
    return <Joke setup={joke.setup} punchline={joke.punchline}/>
  })
  return (
    <div>
      {jokeElement}
    </div>
  )
}
 * 
 */