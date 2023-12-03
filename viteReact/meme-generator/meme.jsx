import React from "react";
import TrollFace from "./img/troll-face.png"

export default function Meme() {
    //const [memeImage, setMemeImage] = React.useState("https://picsum.photos/640/360")
    //below the state is an object 
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://picsum.photos/640/360"
    })
    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
   }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        //the 3 dots means all the previous attributes of the meme ie toptext, 
        // bottomtex and andomimage
        // next code line means the state to be rendered
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

        function handleChange(event) {
            const {name, value} = event.target
            setMeme(prevMeme=>({
                ...prevMeme,
                [name]: value
            }))
        }

    return (
        <main>
            <div className="form">
                <input 
                   placeholder="Top text" type="text" 
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                   placeholder="Bottom text" type="text" 
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                className="form--button"
                onClick={getMemeImage}>Get a new meme image 🖼</button>
                
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export function Content() {
    function handleClick() {
        console.log("I was clicked")
    }
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360"/>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}