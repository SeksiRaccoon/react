import { type } from "os"
import React, { useState } from "react" 
import "./style.css"
import Tabs from './Tabs'

export default function TabContent({ title, content }: {title:any, content:any}) { 
    return(
        <div className="tabcontent">
          <p>{content}</p> 
        </div>
      )
}

