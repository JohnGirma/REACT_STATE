import React, {useState} from "react"
import { createRoot } from "react-dom/client"
import SideBar from "./components/sideBar"
import MainArea from "./components/mainArea"
import Footer from "./components/Footer"


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
    <div className="grid-parent">
      <div className="header">
        <h1 className="text-6xl">Welcome To Our App...</h1>
        <p>The current size is {count} and the current color is {color}.</p>
        <p>
          This page has been liked <strong>{inc}</strong> times.
        </p>
      </div>
      <SideBar color={color} count={count} setCount={setCount} setColor={setColor}/>
      <MainArea color={color} count={count} />
      <Footer setCount={setCount} setInc={setInc}/>
     
     
     
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)