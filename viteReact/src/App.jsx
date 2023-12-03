import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '/vite.svg'
import drewLogo from '../public/assets/drew.jpg'
import React from 'react'
/**import ./App.css */
import gmailLogo from '../public/assets/gmail.svg'
import linkedinLogo from '../public/assets/linkedin.svg'
import twitterLogo from '../public/assets/twitter.svg'
import facebookLogo from '../public/assets/facebook.svg'
import instagramLogo from '../public/assets/instagram.svg'
import githubLogo from '../public/assets/github.svg'
import photogridLogo from '../public/assets/photo-grid.png'
import airbnbLogo from '../public/assets/airbnb-logo.png'
import katiezaferesLogo from '../public/assets/katie-zaferes.png'
import starLogo from '../public/assets/star.png'
import felixLogo from './images/felix.png'
import fluffykinsLogo from './images/fluffykins.png'
import mailiconLogo from './images/mail-icon.png'
import mrwhiskersonLogo from './images/mr-whiskerson.png'
import phoneiconLogo from './images/phone-icon.png'
import pumpkinLogo from './images/pumpkin.png'
import '../props/styles.css'

//import '../Restaurant-Landing-Page-Tutorial/src/style.css'
/**import NavBar from '../airbnb/navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
          <img src={drewLogo} className="logo react" alt="drew's pic" />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

import { NavBar } from '../airbnb/hero'
import Cards from '../airbnb/hero'
import { Hero } from '../airbnb/hero'
import heroData from '../airbnb/data'

import Header from '../meme-generator/header'
import Meme from '../meme-generator/meme'
import { Content } from '../meme-generator/meme'
import Tracker from '../states/interest'
import StarWar from './useEffect/starWar'
import WindowWidth from './useEffect/WindowWidth'
//below is from the meme-generator
//       <Content />
//   <Header />
// <Meme />


function App() {
  const [show, setShow] = React.useState(true)

    function toggle(){
        setShow(prevShow => !prevShow)
    }
  return (
    <div className='windowWidth'>
      <button onClick={toggle}>
    Toggle WindowTracker
   </button>
   {show && <WindowWidth /> }
    </div>
  )
}


export default App
