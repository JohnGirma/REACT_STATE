import React, {useState,createContext} from "react"
import { createRoot } from "react-dom/client"
import SideBar from "./components/sideBar"
import MainArea from "./components/mainArea"
import Footer from "./components/Footer"
import OurContext from "./OurContext"


function App() {

  const [count, setCount] = useState(15);
  const [color, setColor] = useState("Green");
  const [inc,setInc]=useState(0)

 

  return (
    <OurContext.Provider value={{count,setCount,color,setColor,inc,setInc}}>
    <div className="grid-parent">
      <div className="header">
        <h1 className="text-6xl">Welcome To Our App...</h1>
        <p>The current size is {count} and the current color is {color}.</p>
        <p>
          This page has been liked <strong>{inc}</strong> times.
        </p>
      </div>
      <SideBar />
      <MainArea color={color} count={count} />
      <Footer setCount={setCount} setInc={setInc}/>
     
     
     
    </div>
    </OurContext.Provider>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)