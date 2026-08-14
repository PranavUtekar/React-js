import { useState } from "react";

function Colorchanger() {
  const [currentcolor, setcount] = useState("white");
  return (
    
      <body
        style={{
          backgroundColor: currentcolor ,
        }}
      >
        <button onClick={() => setcount("red")}>Red</button>
        <button onClick={() => setcount("green")}>Green</button>
        <button onClick={() => setcount("blue")}>Blue</button>
        <button onClick={() => setcount("Yellow")}>Yellow</button>
        <button onClick={() => setcount("White")}>Default</button>
        <p>{currentcolor}</p>
      </body>
    
  );
}

export default Colorchanger;
