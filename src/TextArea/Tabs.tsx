import { type } from "os"
import React, { useState } from "react" 
import "./style.css"
import TabContent from "./TabContent"



export default function Tabs ({tabsContent}:any) { 
    const [active, setActive] = useState(0)
    const handleTab = (e:any) =>setActive(+e.target.dataset.index) 
    return (
        <div>
            <div className="tab">
                {tabsContent.map((n:any,i:any) => (
                    <button className={ i === active? 'active': ''}
                    onClick={handleTab}
                    data-index={i}
                    >{n.title}</button>
                ))}
            </div>
            {<TabContent {...tabsContent[active]}/>}
        </div>
    )
}