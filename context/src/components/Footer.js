import React from "react";
import OurContext from "../OurContext"
function  Footer(){
  const news =React.useContext(OurContext)
  return(
  <div className="footer">
    <p>This is the footer. </p>
      <button  onClick={()=>{news.setCount(30)}}>Make the text 30px but leave the color the same</button>
    
      <button onClick={()=>{news.setInc(prev=> prev+1)}}>Like The Page</button>
    
  </div>
)}

export default Footer