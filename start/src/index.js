import React, {useState} from "react"
import { createRoot } from "react-dom/client"


function App() {

  const [count, setCount] = useState(15);
  const [color, setColor] = useState("Green");
  const [inc,setInc]=useState(0)

  function handleSizeChange(e){
    setCount(e.target.value)

  }

  function clickButton(){
    setColor("pink")
    setCount(20)
  }
  function incTheNum(){
    setInc(inc+1) }

  return (
    <div className="">
      <div className="header">
        <h1 className="text-6xl">Welcome To Our App...</h1>
        <p>The current size is {count} and the current color is {color}.</p>
        <p>
          This page has been liked <strong>{inc}</strong> times.
        </p>
      </div>
      <div className="sidebar">
        <input type="text" value={count} onChange={handleSizeChange}/><br></br>
        <input type="text" value={color}onChange={e=>setColor(e.target.value)}/><br></br>
        <button onClick={clickButton}>Make the text 20px and pink</button>
      </div>
      <div className="main-area" style={{color:color ,fontSize:`${count}px`}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam laboriosam, optio pariatur provident doloremque consequatur animi? Consequuntur, officiis. Explicabo, vel.</p>
      </div>
      <footer className="footer">
        <p>
          This is the footer. <button onClick={()=>setCount(30)}>Make the text 30px but leave the color the same</button>
        </p>
        <p>
          <button onClick={incTheNum}>Like The Page</button>
        </p>
      </footer>
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)