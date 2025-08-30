// imports
import {useState, useEffect } from "react";

export default function Main() {

  const [memeData, setMemeData] = useState({
    topText : "One does not simply",
    bottomText : "Walk into Mordor",
    imgUrl : "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  },[])

  function handleChange(event) {
    const {value, name} = event.currentTarget
    setMemeData(prev => {return {...prev, [name] : value}})
  }

  function handleButton(){
    setMemeData(prev => {
      return {...prev, imgUrl:allMemes[Math.round(Math.random() * allMemes.length)].url}
    })
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" onChange={handleChange}/>
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" onChange={handleChange}/>
        </label>
        <button onClick={handleButton}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeData.imgUrl} />
        <span className="top">{memeData.topText}</span>
        <span className="bottom">{memeData.bottomText}</span>
      </div>
    </main>
  );
}
