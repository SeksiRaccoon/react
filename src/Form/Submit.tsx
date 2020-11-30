import React, { useState } from "react" 
import "./style.css"

export default function Submit ({data} : { data: string[] }) { 
  return (<div >
      <button className="button" onClick={() => console.log({...data})}>SUBMIT</button>
  </div>)
  
}
