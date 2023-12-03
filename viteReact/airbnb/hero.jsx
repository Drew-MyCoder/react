import React from "react";
import photogridLogo from '../public/assets/photo-grid.png'
import airbnbLogo from '../public/assets/airbnb-logo.png'
import katiezaferesLogo from '../public/assets/katie-zaferes.png'
import mountainbikeLogo from '../public/assets/mountain-bike.png'
import weddingphotographyLogo from '../public/assets/wedding-photography.png'
import starLogo from '../public/assets/star.png'
import './data'


export function NavBar() {
    return (
        <nav>
            <img src={airbnbLogo} alt='airbnb logo' className='nav--logo'/>
        </nav>
    )
  }
  
 export function Hero() {
    return (
      <section className='hero'>
        <img src={photogridLogo} alt='photogrid' className='photo--grid'/>
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p> 
      </section>
    )
  }
  
  
export default function Cards(props){
    let badgeText
    if (props.userData.openSpots === 0) {
      badgeText = "SOLD OUT"
    } else if (props.userData.location === "Online") {
      badgeText = "ONLINE"
    }
    

    return (
      <div className='card'>
        {/**the code from the badgeText ensures that if the openSpots is 0, the badge displays sold out. However, if the spot > 0 and it is online, displays online. else it didsplays nothing.*/}
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.userData.coverImg} className='card--img'/>
        <div className="card--stats">
                  <img src={starLogo} className='card--star'/>
                  <span>{props.userData.stats.rating}</span>
                  <span className='gray'>({props.userData.stats.reviewCount}) • </span>
                  <span className='gray'>{props.userData.location}</span>
              </div>
              <p className="card--title">{props.userData.title}</p>
              <p className="card--price"><span className='bold'>From ${props.userData.price}</span> / person</p>
      </div>
    )
  }
  
  
 /**
  * function to declare in apps.jsx below
  */

 function App() {
  const dataElement = heroData.map(userData => {
    return <Cards id={userData.id} 
                  userData={userData}
                  />
  })         
  return (
    <div>
      <NavBar />
      <Hero /> 
      <section className='cards-list'>
        {dataElement}
      </section>
    </div>
  ) 
}