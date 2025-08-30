// imports
import React from "react";

export default function Main() {

  const [memeData, setMemeData] = React.useState({
    topText : "One does not simply",
    bottomText : "Walk into Mordor",
    imgUrl : "http://i.imgflip.com/1bij.jpg"
  })

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeData.imgUrl} />
        <span className="top">{memeData.topText}</span>
        <span className="bottom">{memeData.bottomText}</span>
      </div>
    </main>
  );
}
