import React from "react";
import ReactDOM from "react-dom"
import App from "../src/App";


function MyEmail() {
    return (
      <button>Email</button>
    )
  }
  
  function MyLinkedIn() {
    return (
      <button className='blue--linkedin'>LinkedIn</button>
    )
  }
  
  function About() {
    return (
        <div>
          <h3>About</h3>
          <p>I am a medical doctor and full stack developer with a particular interest in making things simple and automating daily task. I try to keep up with security and best practices. Also, I am always looking for new things to learn.</p>
        </div>
    )
  }
  
  function Interest() {
    return (
        <div>
          <h3>Interests</h3>
          <p>Football. Reading. Internet fanatic. Politics</p>
        </div>
    )
  }
  
  
  const user = {
    name: 'Andrews Osei M.D.',
    pic: {drewLogo},
    imageSize: 100,
  };
  
  function Profile() {
    return (
      <>
      <h3 className='main--h3'>{user.name}</h3>
      <img
      className='avatar'
      src={drewLogo}
      alt={'photo of ' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
      />
      </>
    )
  }
  
  function Twitter() {
    return (
      <nav>
        <button type="button">
          <img src={twitterLogo} alt="twitter Image"/>
       </button>
      </nav>
    )
  }
  
  function Facebook() {
    return (
      <nav>
        <button type="button">
          <img src={facebookLogo} alt="facebook Image"/>
       </button>
      </nav>
    )
  }
  
  function Instagram() {
    return (
      <nav>
        <button type="button">
          <img src={instagramLogo} alt="instagram Image"/>
       </button>
      </nav>
    )
  }
  
  function Github() {
    return (
      <nav>
        <button type="button">
          <img src={githubLogo} alt="github Image"/>
       </button>
      </nav>
    )
  }
  
  
  function ProjectCard() {
    retrun (
      <div>
        <Profile />
        <main>
          <h3 className='main--h3'>Full Stack Developer</h3>
          <h1>Welcome to my Digital Business Card</h1>
          <nav>
            <MyEmail />
            <MyLinkedIn />
          </nav>
          <About />
          <Interest />
        </main>
        <footer>
            <Twitter />
            <Facebook />
            <Instagram />
            <Github />
        </footer>
      </div>
    )
  }
  

export default function App() {
    return <ProjectCard />
}