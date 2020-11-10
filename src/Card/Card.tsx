import React from "react"
import './style.css'
import  "../App"



type Props = { 
    title: string
    content: string
    
}




export default function Card (props: Props){ 
    return (<div className="card">
        <div className="card-title">{props.title} </div>
        <div className="card-content">{props.content} </div>
    </div>)
}