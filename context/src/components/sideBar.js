import React from "react";


function SideBar(props){
    return(
    <div className="sidebar">
    <input type="text" value={props.count}  onChange={e=>props.setCount(e.target.value)}/><br></br>
    <input type="text" value={props.color} onChange={e=>props.setColor(e.target.value)}/><br></br>
    <button onClick={()=>{props.setColor("pink")
    props.setCount(20)
    }}
    >
        Make the text 20px and pink</button>
  </div>

)}

export default SideBar;