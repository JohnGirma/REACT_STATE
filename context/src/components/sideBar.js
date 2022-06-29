import React from "react";
import OurContext from "../OurContext"


function SideBar(props){
  const state =React.useContext(OurContext)
    return(
    <div className="sidebar">
    <input type="text" value={state.count}  onChange={e=>state.setCount(e.target.value)}/><br></br>
    <input type="text" value={state.color} onChange={e=>state.setColor(e.target.value)}/><br></br>
    <button onClick={()=>{
      state.setColor("pink")
    state.setCount(20)
    }}
    >
        Make the text 20px and pink</button>
  </div>

)}

export default SideBar;