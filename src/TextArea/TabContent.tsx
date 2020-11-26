import React, { useState } from "react" 
import "./style.css"
import Tabs from './Tabs'

export default function TabContent({ content }: { content:string}):JSX.Element { 
    return(
        <div className="tabcontent">
          <p>{content}</p> 
        </div>
      )
}

